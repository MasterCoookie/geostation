// Get the modal
let modal = document.getElementById("myModal");
let modalImgs = Array.from(document.getElementsByClassName('modal-img'));

// Get the image and insert it inside the modal
let modalImg = document.getElementById("img01");
modalImgs.forEach(element => {
    element.onclick = function(){
        modal.style.display = "block";
        modalImg.src = element.src;
    }
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
} 