export default async function ({ store, route }) {
  await store.dispatch('LOAD_BREADCRUMB', route.path);
}
