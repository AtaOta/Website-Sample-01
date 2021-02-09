let nav = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
    <a class="navbar-brand fw-bold" href="./index.html" id="site-name">JACK</a>
    <div class=" d-flex" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home" id="home-link">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#about" id="about-link">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="features-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#services" id="services-link">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-link" href="#contact">Contact Us</a>
            </li>
        </ul>
    </div>
</div>
</nav>
<style>
.nav-item {
    margin-left: 1rem;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .nav-item{
    position: relative;
  }
  .navbar{
    position: fixed;
    width: 100%;
    z-index: 999;
  }
  .nav-item::after{
    content: '';
    position: absolute;
    width: 0; height: 3px;
    display: block;
    right: 0;
    background: #1bac91;
    transition: width .3s ease;
    -webkit-transition: width .3s ease;
  }
  .nav-item:hover::after{
    width: 100%;
    left: 0;
    background: #1bac91;
  }
  #site-name{
    font-size: 1.7rem;
    color: #fff;
  }
  </style>`;
const navbar = document.getElementById("nav");
navbar.innerHTML = nav;