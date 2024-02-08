<template>
    <div class="bg-main-container">
        <div class="card container text-white">
        <img class="card-img" src="../assets/Desktop.webp" alt="Card image">
        <div class="card-img-overlay">
            <h5 class="card-title pt-5 mt-4">Descarga Launcher</h5>
            <p class="card-text">Todos los juegos de RoGWoW en un mismo sitio.</p>
           <div class="b-group pt-5 mr-5">
            <button class="btnBlizz1 mr-3">Descarga</button>
            <button class="btnBlizz2">Más información</button>
           </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    name: 'ContainersBlizz',
}
</script>


<style scoped>
.bg-main-container{
    background-image: url('@/assets/2600_Promo.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

div.card{
    padding-top: 75px;
    padding-bottom: 75px;
    background: none;
    border: 1px solid green;
    
    
}
.card-img{
    height: 380px;
    width: 900px;
    border-radius: 5px;
}
.card-title{
    font-size: 2.9rem;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 600;
    border: 1px solid red;
   
    
}

.card-text{
    border: 1px solid blue;
    color:hsla(0,0%,100%,.7);
    line-height: 1.4;
    margin: 0px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 4px;
    text-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px;
   
}
.b-group{
    border: 1px solid yellow;
}


.btnBlizz1{
    
    text-align: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    grid-auto-flow: column;
    justify-content: center;
    position: relative;
    user-select: none;
    gap: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    height: 64px;
    background: #009dff;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    margin: 0;
    white-space: normal;
    width: 150px;
    background-image: linear-gradient(180deg, #1888EF 0%, #009FE9 100%);
}
.btnBlizz1:hover{
    background: #009dff;
}
.btnBlizz2:hover{
    background: rgba(93, 113, 152, 0.651);
}
.btnBlizz2{
    
    text-align: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    grid-auto-flow: column;
    justify-content: center;
    position: relative;
    user-select: none;
    background:  rgba(93,113,152,.4);
    gap: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    height: 64px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    margin: 0;
    white-space: normal;
    width: auto;
}

</style>