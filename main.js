Webcam.set({
    width: 400, 
    height: 400,
    match_format: 'png',
    png_quality: 90,
});
camera = document.getElementById("camera");

Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri)
    {document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/> ';});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imgClassifier('https://teachablemachine.withgoogle.com/models/Ruw7p0BQ6/model.json',modelLoaded);

function modelLoaded() {
    console.log("The model is loaded thank you for waiting :D");
}