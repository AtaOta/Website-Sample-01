const contact = document.getElementById('contact');
contact.innerHTML=`
<div class="contact container text-center mt-5 pt-5">
     <h1  data-aos="fade-up">Contact</h1>
     <p data-aos="fade-up">The sorrows of a great advantage to raise up. Him, indeed, to the necessities of the flight of his is a result of something. Let there be consectetur velit. Anyone whom the one with greed. And no one has to prevent a receives the rest, for the. Because this man did flee from the duties in the advantage, we realize that this is a quas.</p>
     <div class="location d-flex ">
          <div class="details text-start">
               <div class="location mt-4" data-aos="fade-right">
                    <div class="part-head d-flex">
                         <img src="./assets/img/front/map-marker.svg" width="17px" height="17px" class="m-2">
                         <h4>Location:</h4><br>
                    </div>
                    <div class="part-info text-start">
                         <label>Vapi, Gujarat, India, PIN: 396 191</label>
                    </div>
               </div>
               <div class="email mt-4" data-aos="fade-right">
                    <div class="part-head d-flex">
                         <img src="./assets/img/front/email.svg" width="17px" height="17px" class="m-2">
                         <h4>Email:</h4><br>
                    </div>
                    <div class="part-info text-start">
                         <label>technosoftcompany2021@gmail.com</label>
                    </div>
               </div>
               <div class="phone mt-4" data-aos="fade-right">
                    <div class="part-head d-flex">
                         <img src="./assets/img/front/phone.svg" width="17px" height="17px" class="m-2">
                         <h4>Call:</h4><br>
                    </div>
                    <div class="part-info text-start">
                         <label>+91 9988117628</label>
                    </div>
               </div>
          </div>
          <div class="map" id="map"  data-aos="fade-left"></div>
     </div>
     <form class="form d-grid mt-5"  data-aos="fade">
          <input type="text" name="name" id="f-name" placeholder="Your Name" class="form-control" autocomplete="off">
          <input type="email" class="form-control"name="email" id="f-email" placeholder="Your Email" autocomplete="off">
          <input type="text" name="subject" class="form-control" id="f-subject" placeholder="Subject" autocomplete="off" style="grid-column: 1/-1">
          <textarea name="message" id="f-message" cols="30" rows="10" class="form-control" placeholder="Message"style="grid-column: 1/-1"></textarea>
          <button type="submit" class="btn btn-primary btn-success" style="width: 12rem; grid-column: 1/-1; margin:auto;">Send Message</button>
     </form>
</div>
<style>
     .part-head>img{
          transition: all .5s ease-in-out;
     }
     .part-head>img:hover{
          border-radius: 50%;
     }
     #map{
          height: 16rem;
          width: 100%;
     }
     .details{
          width: 45rem;
     }
     .form{
          grid-template-columns: auto auto;
          grid-template-rows: auto auto auto auto auto;
          grid-gap: 2rem;
     }
</style>
`
function initMap() {
     const uluru = { lat: 20.3893, lng:72.9106 };
     const map = new google.maps.Map(document.getElementById("map"), {
       zoom: 4,
       center: uluru,
     });
     const marker = new google.maps.Marker({
       position: uluru,
       map: map,
     });
}