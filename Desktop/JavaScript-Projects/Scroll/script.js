const images = document.getElementById('images');
var imagesArray = [];
var executed=false;


 images.addEventListener('scroll',()=>{
    console.log(images.scrollTop);
    console.log(images.scrollHeight - images.offsetHeight);
    if(images.scrollTop>=(images.scrollHeight - images.offsetHeight+10)){
        getPhoto();
        setTimeout(() => {
            executed=false;
        }, 2000);
        
    }
    
});

async function addPhoto(){
    if(!executed){
        executed=true;
        const apiUrl = "https://api.unsplash.com/photos/random/?client_id="+"EPdmpekeDBhbTFLDBqD_XUpD1ABr2n76zB4E8ijT4Jk";
        const response = await fetch(apiUrl);
        try{
            
            const data = await response.json();
            const image = document.createElement('img');
            image.setAttribute('src',data.urls.full);
            images.appendChild(image);
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    
}


async function displayPhotos(){

    imagesArray.forEach((photo)=>{
        const image = document.createElement('img');
        image.setAttribute('src',photo.urls.full);
        images.appendChild(image);
    });
}

async function getPhoto(){
    if(!executed){
        const apiUrl = "https://api.unsplash.com/photos/?client_id="+"EPdmpekeDBhbTFLDBqD_XUpD1ABr2n76zB4E8ijT4Jk";
        const response = await fetch(apiUrl);
    try{
        const data = await response.json();
        const image = document.createElement('img');
        imagesArray=data;
        displayPhotos();
        console.log(data);
    }catch(err){
        console.log(err);
    }
    }
    
}
getPhoto();