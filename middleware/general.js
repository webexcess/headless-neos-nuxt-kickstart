export default async function ({ store }) {
  await store.dispatch('LOAD_GENERAL_CONTENT');
}
