export default async function ({ store }) {
  await store.dispatch('navigation/LOAD_NAVIGATION');
}
