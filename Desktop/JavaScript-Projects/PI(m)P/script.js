const videoElement = document.getElementbyId("video");
const button = document.getElementbyId("button");

//Prompt to select media stream,pass to video element, then display
async function selectedMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject =mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch(err){
    console.log(err);
  }
}


selectedMediaStream();
