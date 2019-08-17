var app = document.getElementById('app');
var cards = document.getElementsByClassName("EventCard");
var items = [
    {
    "title": "Create Camp by Summer of Tech",
    "description": " Held at The Grid, 101 Pakenham St W, Wynyard Quarter, Auckland. Presented by Summer of Tech. Please accept this invitation as your official acceptance to attend This is a weekend team event for students to showcase and develop code & design skills. This is THE place to get noticed, to develop skills and work closely with mentors and build something awesome for your portfolio. It’s heaps of fun!! You’ll be forming teams and responding to an API challenge: use any API or dataset to build something cool. This could be a data visualisation or working web or mobile app. On Sunday evening, you get to demonstrate how you’ve worked as a team to build something awesome. There's some conditions! - if you register, you are committing to attend the whole weekend, that's 9am-5:30pm Saturday, and 9am-7:30pm Sunday. It's a BIG commitment. - you MUST be intending to be available for a SoT internship role. If you have another job this summer, or plans to travel, then please don't take up a spot at Create Camp. - if your plans change between now and Create Camp weekend, it is really really important that you withdraw from the event and email us. We will have a very very long waitlist for Create Camp, and we want to maximise the number of students attending. Any questions, please contact us (info@summeroftech.co.nz or click on send a DM)",
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
    },
    {
    "title": "Create Camp by Summer of Tech",
    "description": "focus",
    "timeDate": "1200 12 jan",
    "location": "focus",
    "link": "http://www.google.com"
    }
]

console.log(items);
for(var i = 0; i < items.length; i++) {

    var divCard = document.createElement("div");
    divCard.className = 'EventCard';
    //divCard.onclick = () => ;

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