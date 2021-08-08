/******************************************
project 1 - Random Quote Generator
******************************************/
//CONTENT GET FROM HTML 

var btnClick = document.querySelector(".load-quote");
var quoteContent = document.querySelector(".quote");
var sources = document.querySelector(".source");
var citations = document.querySelector(".citation");

//ARRAY INITIAL

var quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing."];

var quotesBy = ["Nelson Mandela","Walt Disney"];

var quotesSocial = ["FaceBOOK","Insta"];

var quotesYear = [2021,2030];

//INITIAL VALUES IN VARIABLES
var quoteContentOne = "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.";
var sourcesOne = "Patrick McKenzie";
var citationOne = "Twitter";

//OPERATION 
var i = -1;
function getQuotes(){

        
        ++i;
        //PUTTING VALUES
        quoteContent.innerHTML = quotes[i];
        sources.innerHTML = quotesBy[i];
        //citations.innerHTML = quotesSocial[i];
        
        


        //AGAIN IN INITIAL STATES
        console.log(i);
        if(i == quotes.length){
            i=-1;
        quoteContent.innerHTML = quoteContentOne; 
        sources.innerHTML = sourcesOne;
        citations.innerHTML = "hello";
        }
    }



// function getQuotes(){
//     var randomNumber = Math.floor(Math.random() * quotes.length);
//     quoteContent.innerHTML = quotes[randomNumber]; 
//     console.log(randomNumber);
// }

btnClick.addEventListener('click',getQuotes);
// var i = 0 ;
// btnClick.addEventListener('click',function(){
//     console.log("hello I am here");
//     for ( i = 0 ; i <quotes.length;i++){
//         quoteContent.innerHTML = quotes[i]; 
       
//     }
//     if(i==quotes.length){
//         i=0;
//     }
// });





/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 ***/
