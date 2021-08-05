Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:95
});
camera = document.getElementById('camera');
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image src = "'+data_uri+'"/>'
    });
}
console.log("ml5 version:"+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4Bownde3k/model.json',modelLoaded);

function modelLoaded() {
    console.log("the model has been loaded");
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult() {
    if(error){
        console.error(error);
    }else{
        document.getElementById("result_emotion_name1").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();

        if(results[0].label = "pointing right"){
            document.getElementById(update_emoji).innerHTML = "&#128073;";
            document.getElementById("gesture_meaning").innerHTML = "pointing-right:pointing to the right direction"
        }

        if(results[0].label = "pointing left"){
            document.getElementById(update_emoji).innerHTML = "&#128072;";
            document.getElementById("gesture_meaning").innerHTML = "pointing-left:pointing to the left direction"
        }

        if(results[0].label = "Thumbs up"){
            document.getElementById(update_emoji).innerHTML = "&#128077;";
            document.getElementById("gesture_meaning").innerHTML = "thumbs-up:this looks good!"
        }

        if(results[0].label = "Thumbs down"){
            document.getElementById(update_emoji).innerHTML = "&#128078;";
            document.getElementById("gesture_meaning").innerHTML = "thumbs-down:this does not look good!"
        }

        if(results[0].label = "pointing up"){
            document.getElementById(update_emoji).innerHTML = "&#128070;";
            document.getElementById("gesture_meaning").innerHTML = "pointing-up:pointing to the up direction"
        }

        if(results[0].label = "hi"){
            document.getElementById(update_emoji).innerHTML = "&#128075;";
            document.getElementById("gesture_meaning").innerHTML = "waving-hands:hello!"
        }

        if(results[0].label = "peace out/party"){
            document.getElementById(update_emoji).innerHTML = "&#129304;";
            document.getElementById("gesture_meaning").innerHTML = "peace-out/party:have a good day bye/lets party!"
        }
    }
}