var popupoverlay = document.getElementById("popup-overlay");
var popupbox = document.getElementById("popup-box");
var addpopupbutton = document.getElementById("add-btn");


addpopupbutton.addEventListener("click", function () {
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})


var closebutton = document.getElementById("cancle")
closebutton.addEventListener("click", function () {
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

var booktitileinput = document.getElementById("book-titile-input")
var bookauthorinput = document.getElementById("book-author-input")
var textareainput = document.getElementById("book-description-input")
var container = document.getElementById("container")
var addbookbutton = document.getElementById("add-book")


addbookbutton.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("id", "book-container")
    div.innerHTML=`<h2>${booktitileinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${textareainput.value}</p>
    <button id="delete-book" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

// var deletebook = document.getElementById("delete-book")
// deletebook.addEventListener("onclick",function(event){
//     event.target.parentElement.remove()
// })

function deletebook(event) {

    event.target.parentElement.remove()
}

var logpage=document.getElementById("log-in-page-container")
var logbutton = document.getElementById("log-in")
logbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "block"
    logpage.style.display = "block"
})
var canclelogpage=document.getElementById("close-log-page")
canclelogpage.addEventListener("click",function(event){
     popupoverlay.style.display = "none"
    logpage.style.display = "none"
})