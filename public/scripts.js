var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items = [{}]
var isModalOpen= false;

async function getItems(){
    let url = window.location.origin;
    var response = await fetch(`${url}/api/events`)

    items = await response.json();
    for(let i = 0; i < items.length; i++) {
        var divCard = document.createElement("div");
        divCard.className = 'EventCard';
        //divCard.onclick = () => openModal(i);
    
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
        CardTime.innerHTML = items[i].date;
        CardLocation.innerHTML = `${items[i].time} at ${items[i].address}`;
    
        divCard.appendChild(CardTime);
        divCard.appendChild(CardTitle);
        divCard.appendChild(CardLocation);
        divCard.appendChild(CardDescription);

        
        var shareURL = ("https://www.facebook.com/sharer/sharer.php?u=" + items[i].link)
        console.log(shareURL);
        var shareButton = document.createElement("button");
            shareButton.className = "fbShare";
            shareButton.innerHTML = "Share to facebook"
            shareButton.href = (shareURL)
            shareButton.onclick = () => window.location.href = (shareURL)
        divCard.appendChild(shareButton);
        

        app.appendChild(divCard);
    }
}

window.onload = getItems();

var isModalOpen= false;

function openModal(index){
    isModalOpen = true;
    let ModalHeader = document.createElement("div");
        let ModalCloseButton = document.createElement("span");
            ModalCloseButton.className = "close-btn";
            ModalHeader.appendChild(ModalCloseButton);
        let ModalTitle = document.createElement("h1");
            // ModalTitle.innerHTML = items[index].title;
            ModalTitle.innerHTML = items[index].name;
            ModalHeader.appendChild(ModalTitle);
    let ModalBody = document.createElement("div");
        ModalBody.className = "modal-context";
        let ModalEventPage = document.createElement("a");
            ModalEventPage.href = items[index].link;
            ModalBody.appendChild(ModalEventPage);
        let ModalDescription = document.createElement("p");
            ModalDescription.innerHTML = items[index].bio;
            ModalBody.appendChild(ModalDescription);
        let ModalWrapper = document.createElement("div");
            ModalWrapper.id = "modal";
            ModalWrapper.style.display = 'block'
            ModalWrapper.appendChild(ModalHeader);
            ModalWrapper.appendChild(ModalBody);
            let modalDiv = document.getElementById('modal')
            modalDiv.style.display = 'block'
            modalDiv.appendChild(ModalWrapper)
}