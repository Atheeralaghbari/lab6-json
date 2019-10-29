// fetch("http://api.open-notify.org/astros.json")
// .then(function(response) {
//   return response.json();
// })
// .then(function(object) {
//     var ol=document.createElement("ol");
//     var li =document.createElement("li");
//   for(let i=0 ; i < object.people.length ; i++)
//   {
//     li.appendChild(document.createTextNode(object.people[i].name));
//     ol.appendChild(li);
//   }

// })




    fetch("http://api.open-notify.org/astros.json")
.then(function(response) {
return response.json();
})
.then(function(object) {
    console.log(object)

var header=document.querySelector("h1");
header.appendChild(document.createTextNode(object.number));

for(let i=0 ; i < object.people.length ; i++)
{
    var ol=document.getElementById("el");
var li =document.createElement("li");
var li2 =document.createElement("li");
var ul=document.createElement("ul");
li.appendChild(document.createTextNode(object.people[i].name));
li2.appendChild(document.createTextNode(object.people[i].craft));
ul.appendChild(li2);
li.appendChild(ul);
ol.appendChild(li);


}




})
