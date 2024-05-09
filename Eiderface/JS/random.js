let quotes = [
    "How did you see me come?",
    "I am also the father of someone",
    "How can you say no to big balls?",
    "Bonky i need you",
    "I can be a dom if I wanted to",
    "Join the Guild - Join Forced in Friendship! NOW!!",
    "I AM EQUALLY HORNY",
    "I don't know what durex is",
    "I quite liked the WoW movie, it was revolutionary!",
    "I put explosives in teanatt's pants",
    "Teanatt's got explosives in his pants!",
    "Wait, I have to divide the ass first",
    "Without licking my own ass too much..",
    "Pls I want to be hit by the sucky sucky pls",
    "Don't forget to buy weekly ASS",
    "How long do you think is reasonable to be horny?",
    "I will look up the feet thing in the mean time",
    "Daughter is touching poop",
    "I don't care about my followers",
    "Stupid ice!",
    "Everyone say lake Doric!",
    "Do I have to use jackal to use jackal portal?",
    "Note to self, don't eat others salty boogers",
    "Never trust minor with protection",
    "Old ladies are the best!",
    "I think the shrooms just kicked in",
    "Dont have any Honeytots",
    "Why does that sound ridiculously kinky? but I'm here for it 😉",
    "What do you call a guard outside the black citadel? a COWard",
    "Somebody touch my berries",
    "That's where the fish that swims up your peepee lives",
    "One of us is going to get a small big circle",
    "I like my nipples to be a mystery for everybody",
    "Wish I was a crispy pork fried rice",
    "Now I'm going to watch vampire diariea",
    "Pure viking talk zero viking walk",
    "It's not my fault ur balls suck",
    "Keep on slapping those balls"
];

    // Define button to generate and text area of quote output
let quoteButton = document.getElementById('generateQuote');
let quoteText = document.getElementById('quotetext');

    //Function to get random quote from 'quotes' array
function getQuote() {
    let randomNum = 0;
    let num = 0;
    do {randomNum = Math.floor(Math.random() * quotes.length)} while (num === randomNum);
    num = randomNum;
    quoteText.innerHTML = quotes[num];
}

    //Button trigger to generate new quote plus a window onload to always have a quote
quoteButton.addEventListener('click',getQuote);
window.addEventListener('load',getQuote);



let pictures = [
    "./Media/Eiderface.png",
    "./Media/Eiderface (1).png",
    "./Media/Eiderface (2).png",
    "./Media/Eiderface (3).png",
    "./Media/Eiderface (4).png",
    "./Media/Eiderface (5).png",
    "./Media/Eiderface (6).png",
    "./Media/Eiderface (7).png",
]

    //Define button for getPicture & target img element
let imageButton = document.getElementById('generateImage');
let imageElement = document.getElementById('randomImg');

    //Function to get random image from 'pictures' array
function getImage () {
    let randomNum = 0;
    let num = 0;
    do {randomNum = Math.floor(Math.random() * pictures.length)} while (randomNum === num);
    num = randomNum;
    imageElement.src = pictures[num];
}

    //Attach button to event
imageButton.addEventListener('click', getImage);
window.addEventListener('load',getImage);