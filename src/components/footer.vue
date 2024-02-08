<template>
  <div class="footer-container ">
    <nav class="navbar navbar-expand-lg container">
      <div>
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#">Empleo <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Informacion</a>
          <a class="nav-item nav-link" href="#">Asistencia</a>
          <a class="nav-item nav-link" href="#">Contacto</a>
          <a class="nav-item nav-link" href="#">Prensa</a>
          <a class="nav-item nav-link" href="#">API</a>
          <a class="nav-item nav-link" href="#">Mapa del sitio</a>
        </div>
      </div>
    </nav>

    <div class="footer-content d-flex container">
      <img id="footer-logo" src="@/assets/rogwow_footer_logo.png" alt="">
      <p class="r2">©2024 Blizzard Entertainment, Inc.<br>
        Todas las marcas comerciales a las que se hace referencia son propiedad de sus respectivos dueños.</p>
      <button class="social"><i class="bi bi-facebook"></i></button>
      <button class="social"><i class="bi bi-instagram"></i></button>
      <button class="social"><i class="bi bi-youtube"></i></button>
      <button class="social"><i class="bi bi-discord"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBlizz',
}

</script>

<style scoped>
.footer-container {
  background: url('@/assets/Blizz_Footer.jpg');
  height: 534px;
  background-repeat: no-repeat;
  background-size: cover;
}

nav.navbar {
  padding-top: 140px;
  border: 1px solid red;

}

.navbar-nav {
  border-bottom: 1px solid;
  padding-bottom: 35px;
  border-color: rgba(255, 255, 255, 0.125);
  width: 100%;
  border: 1px solid blue;
}

a.nav-link {
  color: #fff;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-right: 17px;
}

a.nav-link:hover {
  background-color: #a8abb925;
  border-radius: 8px;
}

#footer-logo {
  width: 200px;
  height: 80px;
  padding-left: 35px;
  border: 1px solid green;
}

.footer-content {
  border: 1px solid yellow;
  padding-top: 45px;
}

.r2 {
  border: 1px solid orange;
  padding-left: 35px;
  text-align: start;
  color: #ffffff80;
  line-height: 1.4;
  margin: 0px;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  width: 600px;

}

.r3 {

  padding-left: 35px;
  text-align: start;
}

button.social {
  display: inline;
  color: #fff;
  background: rgba(208, 233, 255, 0.2);
  border: 2px solid rgba(0, 0, 0, 0);
  ;
  margin-left: 16px;
  width: 40px;
  border: none;
  height: 40px;
  border-radius: 50%;
}

button.social:hover {
  background: rgba(208, 233, 255, 0.3);
}</style>