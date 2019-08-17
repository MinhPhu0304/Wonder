var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items;
var isModalOpen= false;

async function getItems(){
    var items = await fetch("http://localhost:3000/api/events");
    console.log(items);
}

window.onload = getItems();


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

    CardTitle.innerHTML = items[i].title;
    CardDescription.innerHTML = items[i].description;
    CardTime.innerHTML = items[i].timeDate;
    CardLocation.innerHTML = items[i].location;
    //Link.innerHTML = items[i].link;
    
    divCard.appendChild(CardTime);
    divCard.appendChild(CardTitle);
    divCard.appendChild(CardDescription);
    
    divCard.appendChild(CardLocation);
    //divCard.appendChild(Link);

    //Link.appendChild(LinkText);
    app.appendChild(divCard);
}