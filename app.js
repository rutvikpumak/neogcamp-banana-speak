var btnTranslate = document.querySelector("#btn-translate")
var  txtInput= document.querySelector("#textInput")
var  txtOutput= document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text){
    return `${serverUrl}?text=${text}`;
}

function errorHandler(){
    alert("Something wrong with serve ! Please try again later.");
}
btnTranslate.addEventListener("click",()=>{
    var inputText = txtInput.value;

    fetch(getTranslateURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        txtOutput.innerText =json.contents.translated})
    .catch(errorHandler)
})