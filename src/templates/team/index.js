import TeamItem from './TeamItem.vue';

const install = (Vue) => {
  Vue.component('team-item', TeamItem);
}

export default { install };

export { TeamItem };
