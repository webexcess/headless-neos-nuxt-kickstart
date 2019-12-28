#!/bin/bash

# run `./reload-or-restart.sh --build` manually on a code update
# @todo: run `./reload-or-restart.sh` every x minutes to check for a content update

echo
echo "## RUN START SCRIPT ##"
echo

#source ~/.profile;
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install;

if [ "$1" == "--build" ] ; then
  echo
  echo "## NODE BUILD ##"
  echo
  MINIMAL=true npm run build:local;
fi

PM2STATUS=$(./node_modules/pm2/bin/pm2 ls | grep NodeFrontend)
if [ "$PM2STATUS" == "" ]; then
  echo
  echo "## START PM2 PROCESS ##"
  echo
  ./node_modules/pm2/bin/pm2 start ecosystem.config.js;
else
  echo
  echo "## RELOAD PM2 PROCESS ##"
  echo
  ./node_modules/pm2/bin/pm2 scale NodeFrontend 2;
  ./node_modules/pm2/bin/pm2 reload NodeFrontend;
  ./node_modules/pm2/bin/pm2 scale NodeFrontend 1;
fi;

echo
echo "## START SCRIPT FINISHED ##"
echo
