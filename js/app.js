// FSJS - Random Quote Generator

/* I created an array[] of quote objects{} and I named it (quotes)

*/
var btnClick = document.querySelector(".load-quote");
var quoteBox = document.querySelector(".quote-box");

var bodyElements = document.querySelector("body");


var j=0;
function bodyBackGroud (){
  ++j;
  console.log("2nd clicked1");  
  var imagesArr =["url(img/project3.jpg)","url(img/project6.jpg)","url(img/project7.jpg)","url(img/project10.jpg)","url(img/project9.jpg)"]
  bodyElements.style.backgroundImage = imagesArr[j];
  if(j == imagesArr.length){
    j=0;
    bodyElements.style.backgroundImage = imagesArr[2];
  }
    
}

btnClick.addEventListener("click",bodyBackGroud);




var quotes = [
    { quote: "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
      source: 'Mark Zuckerberg',
      citation: "Facebook's Mark Zuckerberg -- Insights For Entrepreneurs",
      year: '2011' ,
      occupation: '--Former Programmer/Businessman',
    },
  
    {
      quote: 'Not everything that can be counted counts, and not everything that counts can be counted.',
      source: 'William Bruce Cameron ',
      citation: 'Informal Sociology: A Casual Introduction to Sociological Thinking',
      year: '1963' ,
      occupation:'--Book Author',
    },
  
    {
      quote: 'Life is 10% what happens to you and 90% how you react to it.',
      source: 'Charles R. Swindoll',
      citation: 'https://www.brainyquote.com/quotes/charles_r_swindoll_388332',
      year: '2011' ,
      occupation: '--Pastor/Author',
    },
  
    {
      quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time',
      source: 'Thomas A. Edison',
      citation: 'https://www.brainyquote.com/quotes/thomas_a_edison_149049',
      year: '1931' ,
      occupation: '--Inventor/Businessman',
    },
  
    {
      quote: "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.",
      source: 'Robert H. Schuller',
      citation: 'https://www.brainyquote.com/quotes/robert_h_schuller_155998',
      year: '2015' ,
      occupation: '--Pastor/Motivational Speaker'
    }
  ];
  
  
  
  /*
  choose and then return a random quote
  object from the array
  */
  var i=-1;
  function getRandomQuote(array) {
    ++i;      
    var quoteIndex = i;
    console.log(quoteIndex);
    
    var randomQuote = array[quoteIndex];
    console.log(array[quoteIndex]);

    if(i == array.length){
        i=-1;
        //var quoteIndex = i++;
        //console.log(quoteIndex);
        var randomQuote = array[0];
        console.log(array[quoteIndex]);
    }

    return randomQuote;
  }
  
  
  
  
  // I created a second function and  gave it (printQuote) as its name.
  function printQuote() {
    var message = "";   // This is the message variable with empty strings
    var result = getRandomQuote(quotes);

    message = "<p class='quote'>" + result.quote + "</p>";
    message += "<p class='source'>" + result.source;
    message += "<span class='citation'>" + result.citation + "</span>";
    message += "<span class='year'>" + result.year + "</span>";
    message += "<span class='occupation'>" + result.occupation + "</span>"
    message += "</p>";
  
       quoteBox.innerHTML = message;
  }
  

  
  
  
  // This event listener will respond to "Show another quote" button clicks
  // when user clicks anywhere on the button, the "printQuote" function is called
  btnClick.addEventListener("click", printQuote, false);