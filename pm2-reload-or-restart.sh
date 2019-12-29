#!/bin/bash

# run `PM2_NAME=NodeFrontend /bin/bash ./pm2-reload-or-restart.sh --build` manually on code updates
# run `PM2_NAME=NodeFrontend /bin/bash ./pm2-reload-or-restart.sh --update` manually on content updates
# cronjob `* * * * * /bin/bash -c 'GRAPHQL_HOST=https://neos.headless-demo.neos-hosting.ch PM2_NAME=NodeFrontend /bin/bash /home/clients/e0826347de02fffae10627ecd38a387e/headless-demo.neos-hosting.ch/releases/current/pm2-reload-or-restart.sh'` to check for content updates

if [ -z ${PM2_NAME+x} ]; then
    echo
    echo "PM2_NAME env not set, exit script."
    echo
    exit;
fi

full_path=$(realpath $0);
dir_path=$(dirname $full_path);
cd $dir_path;

if [ "$1" != "--build" ] && [ "$1" != "--update" ] ; then

  echo
  echo "## CHECK FOR UPDATED CONTENT ##"
  echo

  wget -O release-timestamp-new --max-redirect 0 -q $GRAPHQL_HOST/?release=timestamp

  if [ ! -f release-timestamp ]; then
    # First run.. create file to compare with next time..
    cp release-timestamp-new release-timestamp;
  fi

  if [ -s release-timestamp-new ]; then
    echo "File looks to be valid .."
  else
    echo "File is empty, exit script."
    echo
    exit;
  fi

  if [ -f release-timestamp-new ]; then
    DIFF=$(diff release-timestamp release-timestamp-new)
    if [ "$DIFF" == "" ]; then
      echo "Nothing has changed, exit script."
      echo
      exit;
    fi
  fi

  echo "New release timestamp found .."
  mv release-timestamp-new release-timestamp;

fi

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
  npm install;

  echo
  echo "## NODE BUILD ##"
  echo
#  MINIMAL=true npm run build:local;
  MINIMAL=true npm run build;
fi

PM2STATUS=$(./node_modules/pm2/bin/pm2 ls | grep $PM2_NAME)
if [ "$PM2STATUS" == "" ]; then
  echo
  echo "## START PM2 PROCESS ##"
  echo
  ./node_modules/pm2/bin/pm2 start ecosystem.config.js;
else
  echo
  echo "## RELOAD PM2 PROCESS ##"
  echo
  ./node_modules/pm2/bin/pm2 scale $PM2_NAME 2;
  ./node_modules/pm2/bin/pm2 reload $PM2_NAME;
  ./node_modules/pm2/bin/pm2 scale $PM2_NAME 1;
fi;

echo
echo "## START SCRIPT FINISHED ##"
echo
