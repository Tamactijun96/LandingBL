<template>
    <div>
        <nav class="container navbar position-fixed navbar-expand-lg mt-3 m-0">
            <div class="navbar-bg"></div>
            <!-- Contenido del navbar -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse m-2 p-1" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <img src="../assets/rogwow_logo_126x41.png" alt="">

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Warcraft
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">World of Warcraft: Wrath of the Lich King</a>
                            <a class="dropdown-item" href="#">World of Warcraft: Cataclysm</a>
                        </div>
                    </div>

                </ul>
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Información</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tienda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cuenta</a>
                    </li>
                    <li class="nav-item">
                        <button id="download">Descarga Launcher</button>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
    <div>
    </div>
</template>


<script>
export default {
    name: 'HeaderBlizz',
}

</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

.navbar {
    position: relative;
    /* Asegurar posición relativa */
    top: 0px;
    height: 72px;
    transform: translateX(-50%);
    left: 50%; 
    z-index: 1000;
}

.navbar-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222639f2;
    filter: blur(0px);
    /* Aplicar el efecto blur al fondo */
    z-index: -1;
    border-radius: 8px;
}

a.nav-link,
button.btn {
    color: #fff;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 1rem;
    margin-right: 14px;
    margin-top: 5px;
}

a.nav-link:hover {
    color: #fff;
    background-color: #a8abb925;
    border: none;
    border-radius: 8px;


}

button.btn {
    background: none;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    
}

button.btn:hover {
    color: #fff;
    background-color: #a8abb925;
}

button.btn:focus {
    background-color: #a8abb925;
   
}

img {
    width: 100px;
    height: 45px;
    
}

button {
    width: 190px;
    border-radius: 3px;
    background: #201f1f69;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 4px;
    padding: 6px;
    border-color: none;
    border: none;
}

#download {
    background-color: #09090e;
    color: #fff;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 10px;
    border-radius: 7px;
}


.dropdown-menu {
    background-color: #131928;
    margin-top: 8px;
    padding: 18px;

}

a.dropdown-item {
    color: #fff;
    padding: 18px;
    margin-left: 0px;
    margin-right: 20px;
    border-radius: 8px;
}

a.dropdown-item:hover {
    background-color: #878b9411;
}</style>


