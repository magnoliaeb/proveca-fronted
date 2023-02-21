<template>
  <div class="text-center empty text-center d-flex justify-center d-flex">
    <div class="empty-img d-flex justify-center align-center">
      <!-- <img
        class=""
        src="../assets/img/Web/bg-not-product.jpg"
        alt="bg-not-product"
      /> -->
      <div class="empty-text">
        <div>
          <h1>Producto no encontrado</h1>
          <p>Intenta buscar tu producto con otra palabra clave</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// .empty {
//   height: 100vh;
// }

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  text-align: center;

  color: #000000;

  opacity: 0.38;
}

h1 {
  font-weight: 900;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;

  color: #000000;
}

.empty-text {
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
}

.empty-img {
  width: 100%;
  max-width: 810px;
  height: 350px;
  position: relative;
}

img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media screen and (min-width: $md) {
  .empty-img {
    height: 450px;
  }
  h1 {
    font-size: 26px;
  }
  p {
    font-size: 14px;
  }
}
</style>
