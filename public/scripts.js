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
var isModalOpen= false;

// async function getItems(){
//     var items = await fetch("http://localhost:3000/api/events");
//     console.log(items);
// }

// window.onload = getItems();


function openModal(index){
isModalOpen = true;

var ModalTitle = document.createElement("h1");
ModalTitle.innerHTML = items[index].title;

var ModalEventPage = document.createElement("button");
ModalTitle.innerHTML = items[index].link;

}

console.log(items);
for(var index = 0; index < items.length; index++) {

    var divCard = document.createElement("div");
    divCard.className = 'EventCard';
    //divCard.onclick = () => openModal(i);

    var CardTime = document.createElement("p");//
    CardTime.className = 'EventTimeDate';

    var CardLocation = document.createElement("p");//

        var CardTitle = document.createElement("h1");//
        CardTitle.className = 'EventTitle';

        var CardBody = document.createElement("div");
        CardBody.className = 'EventBody';

            var CardDescription= document.createElement("p");//
            CardDescription.className = 'EventDescription';

            


    //var Link = document.createElement("button");//
    //var testString = items[i].link;
    //Link.href = items[i].link;
    //Link.onclick = () => window.location.href = (testString);
    //console.log(testString);
    //Link.innerHTML = "Go to event page!";

    //var LinkText = document.createElement("p");
    //LinkText = "Go to event page!";
    //console.log(Link)

    CardTitle.innerHTML = items[index].title;
    CardDescription.innerHTML = items[index].description;
    CardTime.innerHTML = items[index].timeDate;
    CardLocation.innerHTML = items[index].location;
    //Link.innerHTML = items[i].link;
    
    divCard.appendChild(CardTime);
    divCard.appendChild(CardTitle);
    divCard.appendChild(CardDescription);
    
    divCard.appendChild(CardLocation);
    //divCard.appendChild(Link);

    //Link.appendChild(LinkText);
    app.appendChild(divCard);
}