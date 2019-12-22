export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale;

  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return;

  // Get locale from path
  const locale = route.path.substring(1, 3) || defaultLocale;

  // Set locale
  store.commit('SET_LANG', locale);
  app.i18n.locale = store.getters.locale;
}
