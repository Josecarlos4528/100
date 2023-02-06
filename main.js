var SpeechRecognition=window.webkitSpeechRecognition;
var reconocedor=new SpeechRecognition();
function inicio(){
    document.getElementById("textbox").innerHTML="";
    reconocedor.start();
}
reconocedor.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="Toma mi selfie"){
console.log("tomando selfie...");
speak();
}

}
function speak(){
    var synth=window.speechSynthesis;
     speakdata="tu selfie se tomara en 5 segundos";
    var dialgo=new SpeechSynthesisUtterance(speakdata);
    synth.speak(dialgo);
Webcam.attach(camera);
setTimeout(function(){
tomarfoto();
safe();
},5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function tomarfoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    });
}
function safe(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}