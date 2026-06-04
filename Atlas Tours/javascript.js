// Hide anchor when on top
const element = document.getElementById("scrollup-off");
window.addEventListener("scroll", function (event) {
    var scrollY = this.scrollY;
    if (scrollY > 200) {
        element.setAttribute("id", "scrollup-on")
    } else {
        element.setAttribute("id", "scrollup-off")
    }
});

// Toggle collapse of specified content
function toggleContent(content) {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Collapse all open content
function collapseAllOpenContent() {
    const colls = document.getElementsByClassName('collapsible');
    for (const coll of colls) {
        if (coll.classList.contains('collapsible-active')) {
            coll.classList.remove('collapsible-active');
            toggleContent(coll.nextElementSibling);
        }
    }
}

const colls = document.getElementsByClassName('collapsible');
for (const coll of colls) {
    coll.addEventListener('click', function () {
        if (!this.classList.contains('collapsible-active')) {
            collapseAllOpenContent();
        }
        this.classList.toggle('collapsible-active');
        toggleContent(this.nextElementSibling);
    });
};

// Get the modal
var modal = document.getElementsByClassName('modal')[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        console.log("lol")
        modal.style.display = "none";
    }
}
