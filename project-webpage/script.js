
// Changing images after 5 seconds.
// Code used in index.html. 
// Creating two variables that determine how many pictures I have an on what picture it starts on.
// Getting the Id of the element I want the function to be applied to.
// determining where the images are and inserting the index number that change after every 5 seconds to display the next image of the new index.
// When index reaches above the value of the amount, index is set to one again as it restarts on the first picture again.
var amount = 3;
var index = 1;

setInterval(function() {

    var img = document.getElementById('gallery');
    img.src = "media/img/bg" + index + ".jpg";

    index++;
    if(index > amount) index = 1;

}, 5000);






// Toggle between two divs.
// Code used in news.html
// When the page is displayed in a browser, the news div will be displayed and the podcast div will be hidden.
// The first function is triggered when the user clicks on the podcast button. After appliyng the values of the IDs to variables, I display the podcast div and hide the news div. When this happens I also add the active class to the podcast button to display it as active and I remove the same class from the previous active news button.
// the same thing happens when I click on the news button. The podcast div is hidden and the news div is displayed once again with the added 'active' class. This creates a toggle between the two divs.


function TogglePod(){

    var newsDiv = document.getElementById("news");
    var podcastsDiv = document.getElementById("podcasts");

    if (document.querySelector('#podcasts-btn')) {
        podcastsDiv.style.display = "block";
        newsDiv.style.display = "none";
        document.querySelector('#podcasts-btn').classList.add('active')
        document.querySelector('#news-btn').classList.remove('active');
    } 
   


}
function ToggleNews(){

    var newsDiv = document.getElementById("news");
    var podcastsDiv = document.getElementById("podcasts");

    if (newsDiv.style.display = "none") {
        podcastsDiv.style.display = "none";
        newsDiv.style.display = "block";
        document.querySelector('#news-btn').classList.add('active');
        document.querySelector('#podcasts-btn').classList.remove('active');
    } 
   


}




// Form validator
// Used in contact.html
// Along with using the attribute 'required' on all the inputs, I also added a self-made captcha validator.
// First I appied all the necassary IDs to variables to more easily use them in my code. Using the return value on the form and submit button allowed me to stop the form from completely submitting the information as I wasn't working with a server and just wanted to give the illusion of submitting a form. 
// When the form is submitted by the user, the function stops the deafualt event of sending it to the server and allows code to be ran before it is sent. I compared the value of the user input and the characters in my image, created in Paint, to create a basic secure form that blocks unwanted submissions to an extent.
// I then reset the form, giving the illusion that it has been submitted and display a thank you message for the user which disappears after 5 seconds as I didn't want it to be in the way for too long.
// I then returned both of the functions as false as I did not wish for it to be completely submitted to a server.

const contactForm = document.getElementById('con-form');
const captcha = document.getElementById('captcha');
const errorMsg = document.getElementById('error-msg');
const submitMsg = document.getElementById('submit-msg');

function formSubmit(e){
    e.preventDefault;
    if(captcha.value == "Af6xL91"){
        contactForm.reset();

        submitMsg.style.display = "block";
        setTimeout(function(){
            submitMsg.style.display = "none";
        }, 5000)
        
        
        return false;
    }
    else{
        errorMsg.style.display = "block";
        return false;
    }
}

