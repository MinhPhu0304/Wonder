var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items = [{}]
var isModalOpen= false;

async function getItems(){
    var response = await fetch("http://localhost:3000/api/events")
                        // .then(res => return res.json())
                        // .then(data => { console.log(data)})
                        // .catch(err => console.log(err));
    items = await response.json();
    console.log(items)
    for(var i = 0; i < items.length; i++) {
        var divCard = document.createElement("div");
        divCard.className = 'EventCard';
        divCard.onclick = () => openModal;
    
        var CardTime = document.createElement("p");
        CardTime.className = 'EventTimeDate';
    
        var CardLocation = document.createElement("p");
        CardLocation.className = 'EventLocation';
        
        var CardTitle = document.createElement("h1");
        CardTitle.className = 'EventTitle';

        var CardBody = document.createElement("div");
        CardBody.className = 'EventBody';

        var CardDescription= document.createElement("p");//
        CardDescription.className = 'EventDescription';

        CardTitle.innerHTML = items[i].name;
        CardDescription.innerHTML = items[i].bio;
        CardTime.innerHTML = items[i].time;
        CardLocation.innerHTML = items[i].address;
    
        divCard.appendChild(CardTime);
        divCard.appendChild(CardTitle);
        divCard.appendChild(CardLocation);
        divCard.appendChild(CardDescription);
        

        app.appendChild(divCard);
    }
}

window.onload = getItems();

function openModal(index){
isModalOpen = true;

var ModalTitle = document.createElement("h1");
ModalTitle.innerHTML = items[index].title;

var ModalEventPage = document.createElement("button");
ModalTitle.innerHTML = items[index].link;

}

var isModalOpen= false;

function openModal(index){
    isModalOpen = true;
    
    var ModalTitle = document.createElement("h1");
    ModalTitle.innerHTML = items[index].title;
    
    var ModalEventPage = document.createElement("button");
    ModalEventPage.innerHTML = items[index].link;
    
    var ModalDescription = document.createElement("p");
    ModalDescription.innerHTML = items[index].description;
}