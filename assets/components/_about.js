const home = document.getElementById("about");
home.innerHTML = `
<div class="about-container d-flex container" id="about-page">	
    <div class="img">	
        <img class="col-xl-11 col-lg-13 aos-init aos-animate" src="./assets/img/front/about-img.png">	
    </div>	
    <div class="about-content-container ml-2 d-flex">	
        <div class="about-heading-big">	
            <h3>Get The Best Services</h3>	
            <p>Get the best exprience with our team </p>
        </div>	
        <div class="about-heading-small mt-4">	
            <h4>Frontend Development</h4>	
            <p class="text-muted">We use HTML, CSS, JS and Wordpress to create dynamic and static websites ui and ux with awesome design.</p>	
        </div>	
        <div class="about-heading-small mt-4">	
            <h4> Backend Development </h4>	
            <p class="text-muted">We use PHP and Node.js to create dynamic and static websites' database and backend functions with security.</p>	
        </div>	
        <div class="about-heading-small mt-4">	
            <h4>JavaScript Framework and Libraries</h4>	
            <p class="text-muted">We use React.js, Three.js, Anime.js, Electron.js, etc to create Awesome and beautiful apps with awesome design.</p>	
        </div>	
    </div>	
</div>	
<style>	
.about-container{	
    justify-content: center;
    margin-top: 3rem;
}	
.about-content-container{	
    width: 50%;	
    flex-direction: column;	
}	
</style> `