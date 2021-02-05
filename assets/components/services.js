let services = document.getElementById("Services");
services.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
<div class="service-container">
      <div class="service">
            <h1>Service</h1>
            <p class="container text-muted">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                  fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div class="service-flex-boxes">
            <div class="flex-box1  flex-boxes">
                  <img src="./assets/img/front/volleyball-ball-solid.svg" alt="ball" width="35px" height="35px" class="mt-4">
                 <h5 class="mt-4">Lorem Ipsum</h5>
                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
            </div>
            <div class="flex-box2 flex-boxes">
                  <img src="./assets/img/front/file-solid.svg" alt="ball" width="35px" height="35px" class="mt-4">
                  <h5 class="mt-4">Lorem Ipsum</h5>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
            </div>
            <div class="flex-box3 flex-boxes">
                  <img src="./assets/img/front/car-solid.svg" alt="ball" width="35px" height="35px" class="mt-4">
                  <h5 class="mt-4">Lorem Ipsum</h5>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
            </div>
            <div class="flex-box4 flex-boxes">
                  <img src="./assets/img/front/globe-solid.svg" alt="ball" width="35px" height="35px" class="mt-4">
                  <h5 class="mt-4">Lorem Ipsum</h5>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
            </div>
      </div>
</div>
<style>
      .service-container {
            margin-top: 30px;
      }

      .service-container .service {
            text-align: center;
      }
.service-container .service-flex-boxes .flex-box1,.flex-box2,.flex-box3,.flex-box4{
      text-align: center;
      width: 20%;
      margin-left:10px;
      margin-right: 10px;
      height: 25vh;
      border-radius: 15px;
      background-color: #fff;
      color: #444444;
      margin-top: 30px;
}
.service-flex-boxes{
      display: flex;
      flex-direction: row;
      justify-content: center;
      color: #979797;
}
.flexboxes p{
      font-size: 15px;
    line-height: 28px;
    padding-top: 20px;
}
.service-container{
      background-color: #f2f9f8;
}
.flexboxes:hover{
      box-shadow: 0 2px 29px 0 rgb(37 37 37 / 10%);
}
.flex-box1{
      margin-left:30px;
}
</style>
`