<template lang="pug">
.col-xl-3.col-lg-4.col-md-6.py-3
  .card.ft-card
    .ft-card-img.bg-white(style="height: 270px")
    .card-body
      h5.card-title.ft-card__title {{ title }}
      p.card-text.ft-card__subtitle {{ subtitle }}
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style lang="scss">
.ft-card {
  border-color: white !important;
  color: #fff;

  &__title {
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  &__subtitle {
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
  }
}
</style>