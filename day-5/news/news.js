// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
var button = document.querySelector("#mainButton");
var input = document.querySelector("#input");
var wrapper = document.querySelector('#wrapper')
button.addEventListener("click", e => {
  console.log("Button is clicked!")
  var inputValue = input.value
  sendApiRequest(inputValue)
})

function sendApiRequest(value) {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category="+value+"&apiKey=63be4c36482045bbbee4fe82d621d164")
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
        addArticlesToPage(json)
      
    })
}
function addArticlesToPage(json){
    var allDaArticles = json.articles 
    d
    allDaArticles.forEach( article => {
      
        wrapper.innerHTML += '<h1>'+article.title+'</h1>'
        wrapper.innerHTML += '<a href ="'+ article.url+'">link</a>'
        wrapper.innerHTML += '<p>'+article.description+'</p>'
        wrapper.innerHTML += `<img src="${article.urlToImage}"/>`
    })
}
