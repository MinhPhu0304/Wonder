var app = document.getElementById('app');
var modal = document.getElementById('modal');
var items = [
    {
        "name": "Auckland Python Presentation",
        "bio": "Join Career Coach, Alyson Garrido, for a bootcamp hat will help you prepare for your internship interviews. You’ll learn how to: Prepare for the interview Answer common questions Stay present and confident Effectively follow up All students, of any qualification and school welcome. Map: https://cdn.auckland.ac.nz/assets/auckland/students/academic-information/exams-and-final-results/maps/city-campus.pdf",
        "time": "2019-08-21 18:30",
        "link": "https://www.meetup.com/NZPUG-Auckland/events/lngfdryzlbcc/",
        "address": "WZ Building 6-24 St Paul Street"
    },
    {
        "name": "Hello Cypress!",
        "bio": "Cypress.io is a new tool for front end testing - unit, integration, end-to-end - that deals perfectly well with Angular and React and enables collaboration on the team level. Kate will share with you her journey with Cypress, how to start using it, what are its advantages and challenges, and how her team uses Cypress in Continuous Deployment. Real life examples based on a real application will explain the basics and encourage you to explore more. About Kate: Kate Nesmyelova works as a Senior QA Engineer at Vend. She has more than 15 years of work experience in software testing and quality assurance, being responsible for testing of several successful applications in various domains, from medical to workforce management. Right now Kate is concentrating on moving her team's automated testing to Cypress and improving the overall quality of the product by applying the early testing principle. Vista has parking onsite, at rear of the building: Enter Burton St, turn left onto Madeira Place, then turn right onto Madeira Lane. Drive straight ahead and veer left on to the ground level car park. Take the path around the left hand side of the building and enter through the main doors on Khyber Pass Road. (Note: We are trialling the introduction of a booking fee for our meetups. The Meetup app doesn't support NZD so the fee is given in GBP but works out to around $4.90. For more information about why we have introduced the fee, you should already have received an email from us or you can check out the message in the #general channel on Slack. Thanks, Teresa) ",
        "time": "2019-08-20 17:30",
        "link": "https://www.meetup.com/Ministry-of-Testing-Auckland/events/263637298/",
        "address": "60 Khyber Pass Rd undefined"
    },
    {
        "name": "PART 2 - An Introduction to Selenium with Java - for absolute beginners",
        "bio": "Second session of this workshop. ",
        "time": "2019-08-22 19:00",
        "link": "https://www.meetup.com/Ministry-of-Testing-Auckland/events/263992111/",
        "address": "67 Symonds St undefined"
    },
    {
        "name": " Imagining Auckland 2029",
        "bio": "What does the future of work look like for our biggest city? Auckland, like all city-regions, is being disrupted as a result of changing population demographics, societal norms and emerging technologies. These changes will create risks and opportunities for businesses, workers and communities. How quickly these impacts will affect Auckland will vary by industry. Some of our industries are responding to the forces of change; some are delaying their response due to various factors; while others have yet to experience the need for change. A new report by council-controlled organisation, Auckland Tourism, Events and Economic Development (ATEED) examines how local businesses are preparing for the future of work and anticipates how the Auckland workforce will respond to change in the coming decade. Tech Futures Lab invites ATEED to present critical learnings specific to this city and discuss how technological disruption is changing the way we work in Auckland. Join Pam Ford, General Manager of Economic Development at ATEED along with General Manager at Tech Futures Lab, Sarah Hindle to unpack key findings and explore workforce trends crucial for Aucklanders to become future-ready in the face of technological disruption, changing skills needs and new ways of working. Sponsored and hosted by Tech Futures Lab. ",
        "time": "2019-08-29 17:30",
        "link": "https://www.meetup.com/Future-of-Work-New-Zealand/events/gjfkdryzlbcc/",
        "address": "22 McColl St Newmarket"
    },
    {
        "name": "A Day in the Life - Intro to Dev Academy AKL",
        "bio": "Time to upgrade? Tech is a booming, fast paced, exciting and well paid career, and it needs people like you. Enspiral Dev Academy is New Zealand's premiere web development school, where you can go from little to no knowledge and graduate 15 weeks later with the skills to get employed as a Junior Web Developer. Creatives, people with Arts backgrounds, people who never went to Uni, who have been working in the Public sector, who've tried teaching, who've studied computer science, the recently retired, the fresh out of school, who have an interest in mechanics, construction, history and space, all thrive in our programme, which is designed to teach the whole person. If you have tenacity, a bright spark, and a passion to get into tech, this course is for you. If this is interesting, come along to a Day in the Life, the best way to get a feel for why web development is right for you. Get introduced to our new Auckland campus, participate in lectures, learn a bit of code, and get all your questions about the programme answered. You'll get to meet some of the teachers and current students, and gain a real understanding of the kaupapa and values driving Dev Academy's web development programme. DETAILS:Friday 23rd Aug 201910am- 5pm (arrive by 9:45am)Level 5, 12 Morgan Street, Newmarket, Auckland (next to Sweat Yoga) TICKETS:$20, with lunch included! Let us know your dietary preferences.TICKETS MUST BE PURCHASED FROM LIL'REGIE. PLACES ARE LIMITED - book now to secure yours: <a href=\"https://event-6180-5375.lilregie.com/\" class=\"linkified\">https://event-6180-5375.lilregie.com/</a> This event is for people aged 17 years and overDev Academy can only take students with New Zealand or Australian citizenship or residency at this time. Enspiral Dev Academy- Now with Student Loans! <a href=\"https://www.devacademy.co.nz\" class=\"linkified\">https://www.devacademy.co.nz</a> ",
        "time": "2019-08-23 10:00",
        "link": "https://www.meetup.com/Enspiral-Dev-Academy-AKL/events/262864121/",
        "address": "Lvl 5 (Tower B), 12 Morgan St Newmarket undefined"
    },
    {
        "name": "Riskstorming - a team activity for identifying risk",
        "bio": "Riskstorming is a collaborative, strategic activity that focuses on identifying how to test risks that impact the imperative quality aspects of your product. A RiskStorming session takes you through 3 phases to get answers to these questions: 1. Which quality aspects matter most for your product?2. Which risks endanger those quality aspects?3. How do we test to make sure those risks don't happen? We'll team up to tackle some theoretical scenarios, share our knowledge and experiences, and learn together. You'll take away some new insights and maybe find out if Test Sphere can help your organisation. ",
        "time": "2019-09-10 17:30",
        "link": "https://www.meetup.com/Ministry-of-Testing-Auckland/events/263985141/",
        "address": ""
    },
    {
        "name": "A Taste of Tech",
        "bio": "Do you want to know more about a career in tech? Would you like to know more about what careers are available in tech and how to get started? Or are you a woman working in tech, that would like to help empower others to start their own journey. This group is aimed at women of any age or professional background wanting to find out if a tech career is for them. Our goal is to connect women already working in tech careers with those wanting to know how to get started. Our format for the first meet-up will be a selection of round-table discussions, featuring a maximum of ten people per table, on aspects of different tech careers, including coding, testing, UX/design, marketing automation and \"complete beginners\". This first session is about finding out what you want to know, and how we might be able to help. 17:30-18:00 Pizza &amp; Drink18:00-18:15 Opening18:15-18:30 Talk18:30-18:40 Break18:40-19:30 Roundtable19:30-20:00 Drink &amp; Networking Please let us know via the survey link below what table you are most interested in joining. <a href=\"https://ows.io/qs/7pdv55vr\" class=\"linkified\">https://ows.io/qs/7pdv55vr</a> ",
        "time": "2019-08-28 17:30",
        "link": "https://www.meetup.com/Coding-Girl-Meetup-Auckland/events/263989176/",
        "address": "79 Carlton Gore Rd undefined"
    },
    {
        "name": "Alexa Dev Day 2019 Auckland",
        "bio": "Dear Alexa users/developers, Instead of 2 hours of workshop we have something better for you!Join us on this years Alexa Development Days 2019 in Auckland. Alexa Dev Days are free, interactive events produced by Amazon. Engage in hands-on sessions where you will learn to create voice experiences, hear the latest on UI design, and industry trends. Join us for training sessions, workshops, live demos, and networking with Alexa experts and your peers. Don't forget your laptop! Sessions: HOW TO BUILD AN ALEXA SKILLAn Overview of Echo and Alexa skillsIntents, Slots, and SamplesPersistence with AWS DynamoDB and Sessions AttributesAlexa Presentation Language KEY PRINCIPLES TO DESIGN AN ENGAGING ALEXA SKILLVoice DesignSituational DesignLearn How to Publish an Alexa Skill FOR REGISTRATION AND MORE INFORMATION VISIT:<a href=\"https://alexadevday2019auckland.splashthat.com/\" class=\"linkified\">https://alexadevday2019auckland.splashthat.com/</a> When: 8/22/19 9:00am - 5:00pm Where:Crowne Plaza Auckland128 Albert StAuckland ",
        "time": "2019-08-22 09:00",
        "link": "https://www.meetup.com/Auckland-Amazon-Alexa-Meetup/events/tmdrdryzlbsb/",
        "address": "128 Albert St undefined"
    }
]

var isModalOpen= false;

function openModal(index){
    isModalOpen = true;
        var ModalHeader = document.createElement("div");
            var ModalCloseButton = document.createElement("span");
                ModalCloseButton.className = "close-btn";
                ModalHeader.appendChild(ModalCloseButton);
            var ModalTitle = document.createElement("h1");
                // ModalTitle.innerHTML = items[index].title;
                ModalTitle.innerHTML = items[index].name;
                ModalHeader.appendChild(ModalTitle);
                
        var ModalBody = document.createElement("div");
            ModalBody.className = "modal-context";

            var ModalEventPage = document.createElement("a");
                ModalEventPage.href = items[index].link;
                ModalBody.appendChild(ModalEventPage);

            var ModalDescription = document.createElement("p");
                ModalDescription.innerHTML = items[index].bio;
                ModalBody.appendChild(ModalDescription);

            var ModalWrapper = document.createElement("div");
                ModalWrapper.id = "modal";
                ModalWrapper.style.display = 'block'
                ModalWrapper.appendChild(ModalHeader);
                ModalWrapper.appendChild(ModalBody);

                let modalDiv = document.getElementById('modal')
                modalDiv.style.display = 'block'
                modalDiv.appendChild(ModalWrapper)
                /*
            var Link = document.createElement("button");//
                Link.href = items[i].link;
                Link.onclick = () => window.location.href = (Link.href);
                */
 }

console.log(items);
for(let i = 0; i < items.length; i++) {

    var divCard = document.createElement("div");
    divCard.className = 'EventCard';
    divCard.onclick = () => openModal(i);
    // divCard.onclick = () => modal.style.display = "block";
    //divCard.onclick = () => console.log("test");

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

    CardTitle.innerHTML = items[i].name;
    CardDescription.innerHTML = items[i].bio;
    CardTime.innerHTML = items[i].time;
    CardLocation.innerHTML = items[i].address;
    //Link.innerHTML = items[i].link;
    
    divCard.appendChild(CardTime);
    divCard.appendChild(CardTitle);
    divCard.appendChild(CardDescription);
    
    divCard.appendChild(CardLocation);
    //divCard.appendChild(Link);

    //Link.appendChild(LinkText);
    app.appendChild(divCard);

    
}