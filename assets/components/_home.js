const homeViewPage = document.getElementById("home")
homeViewPage.innerHTML = `
<div class="home-view d-flex text-light">
     <h1 class="fw-bolder fs-1" style="letter-spacing:1px;font-size: 3.2rem">Welcome to Jack</h1>
     <p class="fw-normal fs-4" style="color:#ffffff98">We are team of talanted designers making websites and web based apps.</p>
     <button class="btn btn-success" id="homePageButton"><a href="#about-page" class="text-light text-decoration-none">READ MORE</a></button>
</div>
<style>
.home-view{
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 100vh;
     background-color:  #00000060;
     background-image: url("./assets/img/front/hero-bg.png") ;
     background-blend-mode: overlay;
     background-position: center;
     background-attachment: fixed;
}
</style>`;
