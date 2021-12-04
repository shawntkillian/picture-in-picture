const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select medi strean, pass the video element then play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        //error
        console.log(error)
    }
}

button.addEventListener('click', async () => {
    //Disable the button 
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled= false; 
});

selectMediaStream();