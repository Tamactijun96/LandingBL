<template>
  <div class="at">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class=" carousel-inner ">
        <div class="carousel-item  active">
          <img class="d-block w-100" src="../assets/WoWScrnShot.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/WoWScrnShot_012724_174127.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/WoWScrnShot_012724_174405.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselBlizz',
}
</script>

<style>
.at {
  margin-top: -140px;
}

.carousel-indicators li {
  height: 8px;
  width: 52px;
  max-width: calc(100% - 12px);
  margin: 12px 8px;
  background: #8697AA;
  border-radius: 2px;
  flex-grow: 0;
  transition: transform 200ms ease;

}
</style>