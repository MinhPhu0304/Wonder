var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items = [{}]

async function getItems() {
    let url = window.location.origin;
    var response = await fetch(`${url}/api/events`)

    let spinner = document.getElementById("spinner")
    spinner.style.display = 'none'
    items = await response.json();
    for (let i = 0; i < items.length; i++) {
        var divCard = document.createElement("div");
        divCard.setAttribute("uk-toggle", "target: #my-id")
        divCard.className = 'EventCard';
        divCard.onclick = () => openModal(i);

        var CardTime = document.createElement("p");
        CardTime.className = 'EventTimeDate';

        var CardLocation = document.createElement("p");
        CardLocation.className = 'EventLocation';

        var CardTitle = document.createElement("h1");
        CardTitle.className = 'EventTitle';

        var CardBody = document.createElement("div");
        CardBody.className = 'EventBody';

        var CardDescription = document.createElement("p");//
        CardDescription.className = 'EventDescription';

        CardTitle.innerHTML = items[i].name;
        CardDescription.innerHTML = items[i].bio;
        CardTime.innerHTML = items[i].date;
        CardLocation.innerHTML = `${items[i].time} at ${items[i].address ?  items[i].address : 'To be announced'}`;

        divCard.appendChild(CardTime);
        divCard.appendChild(CardTitle);
        divCard.appendChild(CardLocation);
        divCard.appendChild(CardDescription);

        app.appendChild(divCard);
    }
}

window.onload = getItems();

function openModal(index) {
    let modalTitle = document.getElementById("title")
    modalTitle.innerHTML = items[index].name
    let modalDate = document.getElementById("date")
    modalDate.innerHTML = items[index].date
    let modelBio = document.getElementById("description")
    modelBio.innerHTML = items[index].bio;
    let modelLocation = document.getElementById("location")
    modelLocation.innerHTML = items[index].address;
    let modelButton = document.getElementById("ViewMore")
    modelButton.onclick = () => window.location.href = (items[index].link);
    let facebookButton = document.getElementById("facebook")
    facebookButton.onclick = () => window.location.href = (("https://www.facebook.com/sharer/sharer.php?u=" + items[index].link))
    let twitterButton = document.getElementById("twitter")
    twitterButton.onclick = () => window.location.href = (("https://twitter.com/intent/tweet?url=" + items[index].link + "&via=getboldify&text=Join me at this kiwi tech event!"))
    let linkedinButton = document.getElementById("LinkedIn")
    linkedinButton.onclick = () => window.location.href = (("https://www.linkedin.com/sharing/share-offsite/?url=" + items[index].link))
}
