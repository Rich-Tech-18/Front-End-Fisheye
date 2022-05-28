function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "false");
	modal.style.display = "block";
}

const openModal = document.querySelectorAll(".contact_button");
openModal[0].addEventListener("click", displayModal);

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

const closeModalImage = document.querySelector("#closeModal");
closeModalImage.addEventListener("click", closeModal);

function closeLightBox(){
    const lightBox = document.querySelector("#lightboxModal");
    lightBox.setAttribute("aria-hidden", "true");
    lightBox.style.display = "none";
}

document.addEventListener("keydown", function(e){
    if(e.keyCode === 27){
        closeModal();
        closeLightBox();
    }
});


const buttonModal = document.querySelector("#modalSend");
const formulaireModal = document.querySelector("#modalDiv");
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const mail = document.querySelector("#mail");
const message = document.querySelector("#message");

buttonModal.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Formulaire Envoyée");
    console.log("---------------------------------");
    console.log("Prénom : " + prenom.value);
    console.log("Nom : " + nom.value);
    console.log("mail : " + mail.value);
    console.log("message : " + message.value);
    formulaireModal.reset();
});

const buttonSelect = document.querySelector("#select-sort");
buttonSelect.classList.add('downChevron');

buttonSelect.addEventListener('click', function(e){
    e.stopPropagation();
    if(buttonSelect.className === 'downChevron'){
        buttonSelect.classList.remove('downChevron');
        buttonSelect.classList.add('upChevron');
    }else{
        buttonSelect.classList.remove('upChevron');
        buttonSelect.classList.add('downChevron');
    }

});
const body = document.querySelector('body');
body.onclick = function(){
    if(buttonSelect.className === 'upChevron'){
        buttonSelect.classList.remove('upChevron');
        buttonSelect.classList.add('downChevron');
    }
}
const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", function(){
    const lightBox = document.querySelector("#lightboxModal");
    lightBox.style.display = "none";
    lightBox.setAttribute("aria-hidden", true);
});

