<template>
  <div class="">
    <div class="d-flex justify-center align-center">
      <div class="circle"></div>
      <h2 class="mx-5">Productos <span>destacados</span></h2>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 300;
  font-size: 31.5917px;
  line-height: 41px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  text-align: center;

  color: #aeaeae !important;
  span {
    font-weight: 900;
    color: #000;
  }
}
.circle {
  width: 13.85px;
  height: 13.85px;

  background: #2cafe5;
  border-radius: 50%;
}
@media screen and (min-width: $md) {
}
</style>
