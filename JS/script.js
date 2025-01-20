var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    // Remove the "active-link" class from all tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    // Remove the "active-tab" class from all tab contents
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    // Add the "active-link" class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add the "active-tab" class to the content with the corresponding tabname
    document.getElementById(tabname).classList.add("active-tab");
}
// Toggle the menu open
function openmenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0"; // Bring the menu into view
}

// Toggle the menu close
function closemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px"; // Hide the menu off-screen
}
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when scrolling down
window.onscroll = function () {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};