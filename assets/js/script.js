const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const featuresLink = document.getElementById('features-link');
const servicesLink = document.getElementById('services-link');
const contactLink = document.getElementById('contact-link');
window.addEventListener('scroll', ()=>{
     let scrollValue = this.scrollY;
     if ((scrollValue >= 0) && (scrollValue <660)){
          homeLink.style.borderBottom = "3px solid #1bac91";
     }
     else{
          homeLink.style.borderBottom = "none";
     }
     if ((scrollValue > 660) && (scrollValue <1220)){
          aboutLink.style.borderBottom = "3px solid #1bac91";
     }     else{
          aboutLink.style.borderBottom = "none";
     }
     if ((scrollValue > 1220) && (scrollValue <1840)){
          featuresLink.style.borderBottom = "3px solid #1bac91";
     }     else{
          featuresLink.style.borderBottom = "none";
     }
     if ((scrollValue > 1840) && (scrollValue <2250)){
          servicesLink.style.borderBottom = "3px solid #1bac91";
     }     else{
          servicesLink.style.borderBottom = "none";
     }
     if (scrollValue > 2250){
          contactLink.style.borderBottom = "3px solid #1bac91";
     }     else{
          contactLink.style.borderBottom = "none";
     }
});