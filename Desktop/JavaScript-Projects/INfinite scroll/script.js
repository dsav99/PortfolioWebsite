const imageContainer = document.getElementById("image-container");
const loader = document.getElementById('loader');



const apiKey = "EPdmpekeDBhbTFLDBqD_XUpD1ABr2n76zB4E8ijT4Jk";
let photosArray =[];

let ready =false;
let imagesLoaded =0;
let totalImages=0;



function imageLoaded(){
  imagesLoaded++;
  console.log('loaded');
  if(imagesLoaded===totalImages){
    loader.hidden=true;
    ready=true;
    imagesLoaded=0;
    console.log("READY = "+ready);
  }
}

function displayPhotos(){

  totalImages=photosArray.length;
  photosArray.forEach(function(photo){
    var image  = new Image();
    image.src  = photo.urls.regular;


    //Finalize
    //item.appendChild(image);
    image.onload = function() {
    imageContainer.appendChild(image);
};

image.addEventListener('load',imageLoaded);
  });
}

async function getPhotos(){
  try{

    const response = await fetch("https://api.unsplash.com/photos/?client_id="+apiKey);
    photosArray = await response.json();
    displayPhotos();

  }catch{

  }
}


window.addEventListener('scroll',()=>{
  // console.log(window.innerHeight);
  // console.log(window.scrollY);
  // console.log(document.body.offsetHeight);
  // console.log(imageContainer.offsetHeight );
  if(window.innerHeight+window.scrollY >= document.body.offsetHeight-1000  && ready)
  {
    ready=false;
    getPhotos();
    console.log('scroll');
  }


})

//EVENT LISTENER FOR LOADING



getPhotos();
