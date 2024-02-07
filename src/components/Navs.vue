<template>
  <div class="test">
    <ul class="nav nav-tabs justify-content-end" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#Pc" role="tab" aria-controls="home"
          aria-selected="true">Pc</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Consola" role="tab" aria-controls="profile"
          aria-selected="false">Consola</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#cell" role="tab" aria-controls="contact"
          aria-selected="false">Móvil</a>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="Pc" role="tabpanel" aria-labelledby="contact-tab">
        <div class="d-flex flex-wrap justify-content-start mt-5 ml-4">
          <div class="card mr-4 mb-3" style="width: 15rem;" v-for="item of service" :key="item.id">
            <img class="card-img-top" :src="item.image" alt="Card image cap">
            <div class="card-body">
              <h3 class="card-title">{{ item.nombre }}</h3>
              <p class="card-text">{{ item.category }}</p>
              <a href="#" class="btn btn-primary">{{ item.active }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="Consola" role="tabpanel" aria-labelledby="profile-tab">
        <div class="card mt-5 ml-4" style="width: 18rem;">
          <img class="card-img-top" src="../assets/diablo4.webp" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="cell" role="tabpanel" aria-labelledby="profile-tab">
        <div class="card mt-5 ml-4" style="width: 18rem;">
          <img class="card-img-top" src="../assets/card1.webp" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from 'vuex';


export default {
  name: 'NavsBlizz',
  computed: {
    ...mapState(['service'])
  }
}

</script>


<style scoped>
ul.nav {
  border: none;
  padding-top: 30px;
}

.test {
  background: url(../assets/bgnavs.webp) no-repeat center;
  background-size: cover;
  background-position: center;

  
}

a.nav-link {
  border-top-left-radius: none;
  border-top-right-radius: none;
  color: #FFFFFF;
  background: rgba(208, 233, 255, 0.2);
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 20px;
  font-size: 16px;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  margin-right: 12px;
}

.nav-link,
a {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 23px;
  padding-right: 23px;
}

a.nav-link:focus {
  color: #FFFFFF;
  background-color: #0a96ec;
}

h3.card-title {
  color: #FFFFFF;
  font-family: "Poppins", sans-serif;
  font-size: 1.17em;
  font-weight: 600;
}

p.card-text {
  font-family: "Archivo", sans-serif;
  color: rgba(208, 233, 255, 0.6);
  
  
}

div.card {
  background: none;
}
.card-img-top {
  width: 15rem;
  height: 18rem;
  border-radius: 5px;
}

</style>