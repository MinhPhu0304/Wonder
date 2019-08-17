var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items = [
    {
    "title": "accord",
    "description": "focus",
    "timeDate": "accord",
    "location": "focus",
    "link": "google.com"
    },
    {
    "title": "accord2",
    "description": "focus2",
    "timeDate": "accord2",
    "location": "focus2",
    "link": "facebook.con"
    },
    {
    "title": "accord3",
    "description": "focus3",
    "timeDate": "accord3",
    "location": "focus3",
    "link": "hypixel.net"
    }
]

console.log(items);
for(var i = 0; i < items.length; i++) {
    var divCard = document.createElement("div");
    var CardTitle = document.createElement("h2");//
    var CardBody = document.createElement("div");
    var CardDescription= document.createElement("p");//
    var CardTime = document.createElement("p");//
    var CardLocation = document.createElement("p");//
    var Link = document.createElement("a");//
    console.log(Link)

    CardTitle.innerHTML = items[i].title;
    CardDescription.innerHTML = items[i].description;
    CardTime.innerHTML = items[i].timeDate;
    CardLocation.innerHTML = items[i].location;
    Link.innerHTML = items[i].link;
    
    
    divCard.appendChild(CardTitle);
    divCard.appendChild(CardDescription);
    divCard.appendChild(CardTime);
    divCard.appendChild(CardLocation);
    divCard.appendChild(Link);
    app.appendChild(divCard);
}