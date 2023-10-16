// constants for query selector
const myStudentId = document.querySelector("#myStudentId");
const customNumber = document.querySelector("#customNumber");
const custColor = document.querySelector(".custColor");
const randColor = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const images = document.querySelector("#images");
// function to change bg color from user input and add student id
function changeCustomColor(input) {
    console.log(input);
    // add student id to the page
    myStudentId.textContent = "200462061";

    // change bg color from user input

    if (input < 0 || input > 100)
    {
        document.body.style.backgroundColor = "red";
    }
    else if (input >= 0 && input <= 20)
    {
        document.body.style.backgroundColor = "green";
    }
    else if (input >= 21 && input <= 40)
    {
        document.body.style.backgroundColor = "blue";
    }
    else if (input >= 41 && input <= 60)
    {
        document.body.style.backgroundColor = "orange";
    }
    else if (input >= 61 && input <= 80)
    {
        document.body.style.backgroundColor = "purple";
    }
    else if (input >= 81 && input <= 100)
    {
        document.body.style.backgroundColor = "yellow";
    }
    
}

// function to change bg color from random no.
function changeRandomColor() {
    //generate random number between 0 and 100
    var random = Math.floor(Math.random() * 100);
    // call changeCustomColor function and pass random number
    changeCustomColor(random);
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 

    //create an array of images
    var files = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; 
    //loop through the array of images
    if (imageSelect.length > 1)
    {
        return;
    }

    for (var i = 0; i < files.length; i++) {
        //create an option element
        var option = document.createElement("option");
        //set the value of the option to the name of the image
        option.value = files[i];
        //set the text of the option to the name of the image
        option.text = files[i];
        //append the option to the select element
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    // get the value of selected option
    var image = imageSelect.value;
    // change the image source
    document.querySelector("#images").src = "./img/" + image;
}

// event listeners for on click event of buttons and select
randColor.addEventListener("click", changeRandomColor);
custColor.addEventListener("click", function() {
    changeCustomColor(customNumber.value);
});
imageSelect.addEventListener("click", addList);
imageSelect.addEventListener("change", changeImage);
// event listeners for on change event of select