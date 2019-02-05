import $ from 'jquery'

$(document).ready(() => {
  // have fun!
})


var request = new XMLHttpRequest();

function getTopWord(){
  request.open('GET', "https://wordwatch-api.herokuapp.com/api/v1/top_word")
  request.onload = function() {
    var word = JSON.parse(request.responseText)
    var key = Object.keys(word.word)
    var count = word.word[key]
    debugger;
    formatWord(key, count)
  };
  request.send();

}

function formatWord(){
    console.log("test")
}

getTopWord(word, count)
