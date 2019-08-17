var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items = [
    {
    "title": "Create Camp by Summer of Tech",
    "description": "focus",
    "timeDate": "1200 12 jan",
    "location": "focus",
    "link": "google.com"
    },
    {
    "title": "Code bootcamp by test company",
    "description": "focus2",
    "timeDate": "31 dec, 2019",
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
    divCard.className = 'EventCard';
    var CardTitle = document.createElement("h1");//
    CardTitle.className = 'EventTitle';
    var CardBody = document.createElement("div");
    CardBody.className = 'EventBody';
    var CardDescription= document.createElement("p");//
    var CardTime = document.createElement("p");//
    CardTime.className = 'EventTimeDate';
    var CardLocation = document.createElement("p");//
    var Link = document.createElement("button");//
    Link.href = items[i].link;
    
    console.log(Link)

    CardTitle.innerHTML = items[i].title;
    CardDescription.innerHTML = items[i].description;
    CardTime.innerHTML = items[i].timeDate;
    CardLocation.innerHTML = items[i].location;
    Link.innerHTML = items[i].link;
    
    divCard.appendChild(CardTime);
    divCard.appendChild(CardTitle);
    divCard.appendChild(CardDescription);
    
    divCard.appendChild(CardLocation);
    divCard.appendChild(Link);
    app.appendChild(divCard);
}