document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Website Loaded");

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
function toggleNav() {
    var sideNav = document.getElementById("sideNav");
    // Check if the sidebar is already closed (width = 0)
    if (sideNav.style.width === "0px" || sideNav.style.width === "") {
        sideNav.style.width = "250px"; // Open the sidebar
    } else {
        sideNav.style.width = "0"; // Close the sidebar
    }
}
document.getElementById("closeBtn").addEventListener("click", toggleNav);
// Added event listener to close the sidebar when clicking on any link inside the sidebar
document.querySelectorAll(".side-nav a").forEach(link => {
    link.addEventListener("click", toggleNav);
});