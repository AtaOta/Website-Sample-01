const features = document.getElementById('features');
features.innerHTML = `
<div class="features container mt-5 pt-5 d-flex">
     <div class="f-details">
          <div class="f-part mt-4" id="f-part-1" onclick="changeImage()">
               <h4>Good Products</h4>
               <p class="text-muted f-para">We provide good products and apps cheaply</p>
          </div>
          <div class="f-part mt-4" id="f-part-2" onclick="changeImage()">
               <h4>Good experience</h4>
               <p class="text-muted f-para">We have won many prizes for our skills and abilities.</p>
          </div>
          <div class="f-part mt-4" id="f-part-3" onclick="changeImage()">
               <h4>Specialized developers</h4>
               <p class="text-muted f-para">We dived deep into web development needs such as HTML, CSS and JS.</p>
          </div>
     </div>
     <div id="features-banner-container"></div>
</div>
<style>
     .f-part, .f-para{
          transition: all .3s ease-in;
          cursor: pointer;
     }
     .f-part:hover, .f-para:hover{
          color: #12be99 !important;
     }
</style>
`;
const banner = document.getElementById('features-banner-container');
let img1 = './assets/img/front/features-1.png';
let img2 = './assets/img/front/features-2.png';
let img3 = './assets/img/front/features-3.png';
let featuresImage = document.createElement('img');
featuresImage.setAttribute("src", img1);
featuresImage.style.width = '20rem';
featuresImage.style.height = '20rem';
banner.appendChild(featuresImage);
const changeImage = () =>{
     let currentImage = featuresImage.getAttribute('src');
     if(currentImage == img1){
          featuresImage.setAttribute('src', img2)
     }
     else if(currentImage == img2){
          featuresImage.setAttribute('src', img3)
     }
     else if(currentImage == img3){
          featuresImage.setAttribute('src', img1)
     }
}