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
        CardLocation.innerHTML = `${items[i].time} at ${items[i].address}`;

        divCard.appendChild(CardTime);
        divCard.appendChild(CardTitle);
        divCard.appendChild(CardLocation);
        divCard.appendChild(CardDescription);

        
        var facebookShareURL = ("https://www.facebook.com/sharer/sharer.php?u=" + items[i].link)
        var shareButton = document.createElement("button");
            shareButton.className = "fbShare";
            shareButton.innerHTML = "Share to facebook"
            shareButton.href = (facebookShareURL)
            shareButton.onclick = () => window.location.href = (facebookShareURL);
        divCard.appendChild(shareButton);
        
        var linkedInShareURL = ("https://www.linkedin.com/sharing/share-offsite/?url=" + items[i].link)
        var linkedInShareButton = document.createElement("button");
            linkedInShareButton.className = "linkedInShare";
            linkedInShareButton.innerHTML = "Share to LinkedIn"
            linkedInShareButton.href = (linkedInShareURL)
            linkedInShareButton.onclick = () => window.location.href = (linkedInShareURL);
        divCard.appendChild(linkedInShareButton);

        var twitterShareURL = ("https://twitter.com/intent/tweet?url=" + items[i].link + "&via=getboldify&text=Join me at this kiwi tech event!")
        var twitterShareButton = document.createElement("button");
            twitterShareButton.className = "twitterShare";
            twitterShareButton.innerHTML = "Share to twitter"
            twitterShareButton.href = (twitterShareURL)
            twitterShareButton.onclick = () => window.location.href = (twitterShareURL);
        divCard.appendChild(twitterShareButton);

        var registerURL = (items[i].link)
        var registerButton = document.createElement("button");
            registerButton.className = "registerButton";
            registerButton.innerHTML = "Register!"
            registerButton.href = (registerURL)
            registerButton.onclick = () => window.location.href = (registerURL);
        divCard.appendChild(registerButton);

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
