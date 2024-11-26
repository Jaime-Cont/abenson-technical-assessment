/* HEADER UPDATES SEARCH ICON DEPENDING ON FOCUS - START */
let searchFocused = false;

function ChangeSearchIcon() {
    if(searchFocused) {
        document.getElementById("header-input-search-icon").src = "assets/header/search-icon.png";
        searchFocused = false;
    }
    else {
        document.getElementById("header-input-search-icon").src = "assets/header/search-icon-active.png";
        searchFocused = true;
    }
}
/* HEADER UPDATES SEARCH ICON DEPENDING ON FOCUS - END */

/* SHOW CHOSEN FILE NAME - START */
const fileInput = document.getElementById("form-resume-input");
const fileOutput = document.getElementById("file-output");

fileInput.addEventListener("change", (event) => {
    const files = event.target.files;

    for (const file of files) {
        fileOutput.innerHTML = file.name;
    }
});
/* SHOW CHOSEN FILE NAME - END */

/* FADE IN ANIMATION ON ENTER SCREEN VIEW - START */
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((fadeEntries) => {
    fadeEntries.forEach(fadeEntry => {
        if (fadeEntry.isIntersecting) {
            fadeEntry.target.classList.add('active');
        }
    });
});

fadeElements.forEach(fadeElem => observer.observe(fadeElem));
/* FADE IN ANIMATION ON ENTER SCREEN VIEW - END */

/* MEET THE TEAM CARDS MOVEMENT (MOBILE) - START */
const teamsCardContainer = document.querySelectorAll('[id=flip-card]');;
let currentContainerPos = 0;

function MeetTeamsMoveLeft() {
    if(currentContainerPos < 0) {
        currentContainerPos = currentContainerPos + 100;
    }
    
    for(var i = 0; i < teamsCardContainer.length; i++) 
        teamsCardContainer[i].style.transform = "translateX(" + currentContainerPos + "%)";
} 

function MeetTeamsMoveRight() {
    if(currentContainerPos > -800) {
        currentContainerPos = currentContainerPos - 100;
    }

    for(var i = 0; i < teamsCardContainer.length; i++) 
        teamsCardContainer[i].style.transform = "translateX(" + currentContainerPos + "%)";
} 
/* MEET THE TEAM CARDS MOVEMENT (MOBILE) - END */

/* EXTEND JOB OPENINGS - START */
const jobsSectionContainer = document.getElementById("featured-jobs");
const jobsContainer = document.getElementById("job-listing-container");
const jobsButton = document.getElementById("job-postings-btn");

let extended = false;

function JobOpenings() {
    if(extended) {
        jobsSectionContainer.style.height = "321.47px";
        jobsContainer.style.height = "182px";
        extended = false;
        jobsButton.innerHTML = "See All";
    }
    else {
        jobsSectionContainer.style.height = "587.93px";
        jobsContainer.style.height = "480px";
        extended = true;
        jobsButton.innerHTML = "See Less";
    }
}
/* EXTEND JOB OPENINGS - END */

/* SUBMIT RESUME FORM VALIDATION - START */
const nameInputElem = document.getElementById("form-name-input");
const nameInputLabel = document.getElementById("form-name-input-label");
const nameError = document.getElementById("name-error");
const emailInputElem = document.getElementById("form-email-input");
const emailInputLabel = document.getElementById("form-email-input-label");
const emailError = document.getElementById("email-error");
const fileError = document.getElementById("file-error");

function validateResumeForm() {
    let resumeName = document.forms["resume-form"]["resume-name"].value;
    let resumeEmail = document.forms["resume-form"]["resume-email"].value;
    let resumeFile = document.forms["resume-form"]["resume-file"].value;

    if(!/\S/.test(resumeName) || !/^[a-zA-Z\s]*$/g.test(resumeName)) {
        nameError.style.display = "block";
        nameInputElem.style.border = "1px solid var(--semantic-color-red)";
        nameInputLabel.style.color = "var(--semantic-color-red)";
        return;
    }
    else {
        nameError.style.display = "none";
        nameInputElem.style.border = "1px solid var(--primary-color-blue)";
        nameInputLabel.style.color = "var(--primary-color-blue)";
    }

    if(!validateEmail(resumeEmail)) {
        emailError.style.display = "block";
        emailInputElem.style.border = "1px solid var(--semantic-color-red)";
        emailInputLabel.style.color = "var(--semantic-color-red)";
        return;
    }
    else {
        emailError.style.display = "none";
        emailInputElem.style.border = "1px solid var(--primary-color-blue)";
        emailInputLabel.style.color = "var(--primary-color-blue)";
    }

    if(resumeFile == "") {
        fileError.style.display = "block";
        return;
    }
    else {
        fileError.style.display = "none";
    }

    alert("Resume Submitted");
}

function validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
/* SUBMIT RESUME FORM VALIDATION - END */

/* FOOTER SEE MORE HOTLINE - START */
const hotlineHidden = document.getElementById("hidden-hotline");
const hotlineButton = document.getElementById("hotline-btn");
let isHidden = true;

function ShowHiddenHotline() {
    if(!isHidden) {
        hotlineHidden.style.display = "none";
        hotlineButton.innerHTML = "See More";
        isHidden = true;
    } else {
        hotlineHidden.style.display = "block";
        hotlineButton.innerHTML = "See Less";
        isHidden = false;
    }
}
/* FOOTER SEE MORE HOTLINE - END */

/* FOOTER OVERSEAS HOTLINE DROPDOWN - START */
const overseasHidden = document.getElementById("footer-overseas-hidden");
const overseasDropdown = document.getElementById("footer-overseas-dropdown");
let isDropdownOverseas = true;

function ShowHiddenOverseas() {
    if(!isDropdownOverseas) {
        overseasHidden.style.display = "none";
        overseasDropdown.style.transform = "rotate(0deg)";  
        isDropdownOverseas = true;
    } else {
        overseasHidden.style.display = "block";
        overseasDropdown.style.transform = "rotate(180deg)";
        isDropdownOverseas = false;
    }
}
/* FOOTER OVERSEAS HOTLINE DROPDOWN - END */

/* FOOTER BUSINESS SOLUTIONS DROPDOWN - START */
const businessHidden = document.getElementById("footer-business-hidden");
const businessDropdown = document.getElementById("footer-business-dropdown");
let isDropdownBusiness = true;

function ShowHiddenBusiness() {
    if(!isDropdownBusiness) {
        businessHidden.style.display = "none";
        businessDropdown.style.transform = "rotate(0deg)";  
        isDropdownBusiness = true;
    } else {
        businessHidden.style.display = "block";
        businessDropdown.style.transform = "rotate(180deg)";
        isDropdownBusiness = false;
    }
}
/* FOOTER BUSINESS SOLUTIONS DROPDOWN - END */

/* FOOTER CUSTOMER SERVICE DROPDOWN - START */
const customerHidden = document.getElementById("footer-customer-hidden");
const customerDropdown = document.getElementById("footer-customer-dropdown");
let isDropdownCustomer = true;

function ShowHiddenCustomer() {
    if(!isDropdownCustomer) {
        customerHidden.style.display = "none";
        customerDropdown.style.transform = "rotate(0deg)";  
        isDropdownCustomer = true;
    } else {
        customerHidden.style.display = "block";
        customerDropdown.style.transform = "rotate(180deg)";
        isDropdownCustomer = false;
    }
}
/* FOOTER CUSTOMER SERVICE DROPDOWN - END */