import {eraseCount, totalCount, countLikes, eraseMedia, displayMedia} from "https://rich-tech-18.github.io/Front-End-Fisheye/scripts/pages/photographer.js";
import {photographerFactory} from "https://rich-tech-18.github.io/Front-End-Fisheye/scripts/factories/photographer.js";

async function getPhotographers() {
    // recupere les tabbleau des photographes
    return fetch("https://rich-tech-18.github.io/Front-End-Fisheye/data/photographers.json")
    .then(reponse =>  reponse.json())
    .then( data  => {return data;})
    .catch((err) => console.log(err));
}

// async function getMedia() {
//     return fetch('../data/photographers.json')
//     .then(reponse =>  reponse.json())
//     .then( data  => {return data.media})
//     .catch((err) => console.log(err));
   
// };



async function displayData(photographers) {
    //affiche les donnée du tableau

    const photographersSection = document.querySelector(".photographer_section");
    const whereMyId = new URL (window.location).searchParams.get("id");
    const findMyId = parseInt(whereMyId);
    // const arraySave = photographers.media;
    // console.log(arraySave);
    
    if(window.location.pathname === "/Front-End-Fisheye/" || window.location.pathname === "/Front-End-Fisheye/index.html"){
        //si ce trouve sur la page de lancement ou de l'index, lance la fonction pour afficher les photographes
         photographers.photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
    }
   

    if(window.location.pathname === "/Front-End-Fisheye/photographer.html"){

        //si ce trouve sur la page photographer.html, affiche les donnes spécifique au photographe selectionner

        // console.log('sans sort '+photographers.media);
        // photographers.media.sort(function(a, b){
        //     if (a.title < b.title){
        //         return -1;
        //     }else{
        //         return 1;
        //     }
        // });
        // console.log(photographers);
      
        let total = countLikes(photographers, findMyId);
        const photographHeader = document.querySelector(".photograph-header");
        // const photographBody = document.querySelector('.photograph-body');
        const photographPrice = document.querySelector(".photograph-price");
        const modalHeadeName = document.querySelector("#modalDiv");
        
        photographers.photographers.forEach((photographer) =>{
            if (photographer.id === findMyId){
                // boucle sur le tableau de donné du photographe selectionné
                const photographerModel = photographerFactory(photographer);
                const userHeaderDOM = photographerModel.getUserHeaderDOM();
                const photographPictureDOM = photographerModel.getPhotographerPictureDom();
                const photographPriceDom = photographerModel.getPhotographerPrice();
                const namePhotographModal = photographerModel.getPhotographerName();
                photographHeader.appendChild(userHeaderDOM);
                photographHeader.appendChild(photographPictureDOM);
                photographPrice.appendChild(photographPriceDom);
                modalHeadeName.appendChild(namePhotographModal);
                } });
        
        displayMedia(photographers.media, findMyId);


       

    const next = document.querySelector("#next");
    const back = document.querySelector("#back");
    
    
    
    next.addEventListener("click", function(){
    //     Événement pour le bouton "suivant" de la lightbox,
    //     Si le bouton est cliqué, fait une boucle pour récupère l'index de l'élément,
    //    Puis compare l'index, si c'est supérieur aux tableau sourceMedia, l'index revient à zéro pour revenir sur le premier élément
    //    Créer ainsi une boucle sur l'affichage de la lightbox.
        const sourceMedia = document.querySelectorAll(".photograph-body article");
        const videoInModal = document.querySelector("#slider video");
        const mediaInModal = document.querySelector("#lightboxModal #slider img");
        const titleNext = document.querySelector("#titleImg");
        let index = 0;
        for(let i=0; i<sourceMedia.length; i++){
            if((mediaInModal.src || videoInModal.src) === ("https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[i].dataset.path+sourceMedia[i].dataset.media)){
                index = i;
            }
        }
        index = index + 1;
        if(index === sourceMedia.length){
            index = 0;
            console.log(index);
        }
        mediaInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        videoInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        titleNext.textContent = sourceMedia[index].dataset.title;
        if(sourceMedia[index].dataset.media.endsWith(".jpg")){
            mediaInModal.style.display = "block";
            videoInModal.style.display ="none";
        }else{
            mediaInModal.style.display = "none";
            videoInModal.style.display ="block";
            videoInModal.setAttribute("controls", "controls");
        }
    });
    back.addEventListener("click", function(){
        // Événement pour le bouton "suivant" de la lightbox,
        // Si le bouton est cliqué, fait une boucle pour récupère l'index de l'élément,
        // Puis compare l'index, si c'est inférieur à zéro, l'index sera égal au dernier élément du tableau
        // Créer ainsi une boucle sur l'affichage de la lightbox.
        const sourceMedia = document.querySelectorAll(".photograph-body article");
        const mediaInModal = document.querySelector("#lightboxModal #slider img");
        const videoInModal = document.querySelector("#slider video");
        const titleNext = document.querySelector("#titleImg");
        let index = 0;
        for(let i=0; i<sourceMedia.length; i++){
            if((mediaInModal.src || videoInModal.src) === ("https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[i].dataset.path+sourceMedia[i].dataset.media)){
                index = i;
            }
        }
        index = index - 1;
        if(index < 0){
            index = sourceMedia.length -1;
        }
        mediaInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        videoInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        titleNext.textContent = sourceMedia[index].dataset.title;
        if(sourceMedia[index].dataset.media.endsWith(".jpg")){
            mediaInModal.style.display = "block";
            videoInModal.style.display ="none";
        }else{
            mediaInModal.style.display = "none";
            videoInModal.style.display ="block";
            videoInModal.setAttribute("controls", "controls");
        }
        
        
    });

    document.addEventListener("keydown", function(e){
    //     Événement pour la touche droite pour la lightbox,
    //     Si le bouton est cliqué, fait une boucle pour récupère l'index de l'élément,
    //    Puis compare l'index, si c'est supérieur aux tableau sourceMedia, l'index revient à zéro pour revenir sur le premier élément
    //    Créer ainsi une boucle sur l'affichage de la lightbox.
        if(e.keyCode === 39){
            const sourceMedia = document.querySelectorAll(".photograph-body article");
        const videoInModal = document.querySelector("#slider video");
        const mediaInModal = document.querySelector("#lightboxModal #slider img");
        const titleNext = document.querySelector("#titleImg");
        let index = 0;
        for(let i=0; i<sourceMedia.length; i++){
            if((mediaInModal.src || videoInModal.src) === ("https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[i].dataset.path+sourceMedia[i].dataset.media)){
                index = i;
            }
        }
        index = index + 1;
        if(index === sourceMedia.length){
            index = 0;
            console.log(index);
        }
        mediaInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        videoInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        titleNext.textContent = sourceMedia[index].dataset.title;
        if(sourceMedia[index].dataset.media.endsWith(".jpg")){
            mediaInModal.style.display = "block";
            videoInModal.style.display ="none";
        }else{
            mediaInModal.style.display = "none";
            videoInModal.style.display ="block";
            videoInModal.setAttribute("controls", "controls");
        }
        }
    if(e.keyCode === 37){
    //    Événement pour la touche gauche pour la lightbox,
    //    Si le bouton est cliqué, fait une boucle pour récupère l'index de l'élément,
    //    Puis compare l'index, si c'est supérieur aux tableau sourceMedia, l'index revient à zéro pour revenir sur le premier élément
    //    Créer ainsi une boucle sur l'affichage de la lightbox.
        const sourceMedia = document.querySelectorAll(".photograph-body article");
        const mediaInModal = document.querySelector("#lightboxModal #slider img");
        const videoInModal = document.querySelector("#slider video");
        const titleNext = document.querySelector("#titleImg");
        let index = 0;
        for(let i=0; i<sourceMedia.length; i++){
            if((mediaInModal.src || videoInModal.src) === ("https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[i].dataset.path+sourceMedia[i].dataset.media)){
                index = i;
            }
        }
        index = index - 1;
        if(index < 0){
            index = sourceMedia.length -1;
            console.log(index);
        }
        mediaInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        videoInModal.src = "https://rich-tech-18.github.io/Front-End-Fisheye/"+sourceMedia[0].dataset.path+sourceMedia[index].dataset.media;
        titleNext.textContent = sourceMedia[index].dataset.title;
        if(sourceMedia[index].dataset.media.endsWith(".jpg")){
            mediaInModal.style.display = "block";
            videoInModal.style.display ="none";
        }else{
            mediaInModal.style.display = "none";
            videoInModal.style.display ="block";
            videoInModal.setAttribute("controls", "controls");
        }
        
    }
    });
   
    
    // mediaFactory(photographers.media).totalCount(total);
    // const articles = Array.from(document.querySelectorAll("article"));
    // const arrayForSort = [];
    // for(let i = 0; i<photographers.media.length; i++){
    //     if(photographers.media[i].photographerId === findMyId){
    //         arrayForSort.push(photographers.media[i]);
    //     };
    // };
    // console.log(arrayForSort);
    // const orderByPopulaire = articles.sort(function(a, b){
    //     if(a.likes > b.likes){
    //         return -1;
    //     }else{
    //         return 1;
    //     }
    // });
    
    // console.log(articles);
    // console.log(orderByPopulaire);
    const selectOptionSort = document.querySelector(".select-menu");
    selectOptionSort.addEventListener("click", function(){
        // Tri le tableau de donné en fonction du clique de l'utilisateur,
        // Puis efface tout le DOM et affiche en fonction de l'ordre sélectionne
        const textSelect = document.querySelector(".sBtn-text");
        // if(selectOptionSort.value === "normal"){
          
        // }
        if(textSelect.innerText === "Titre"){
            photographers.media.sort(function(a, b){
                    if (a.title < b.title){
                        return -1;
                    }else{
                        return 1;
                    }
                });
                
        }
        if(textSelect.innerText === "Date"){
            photographers.media.sort(function(a, b){
                    if (a.date < b.date){
                        return -1;
                    }else{
                        return 1;
                    }
                });
                
        }
        if(textSelect.innerText === "Populaire"){
          
                photographers.media.sort(function(a, b){
                    if(a.likes > b.likes){
                        return -1;
                    }else{
                        return 1;
                    }
                });
                // articles[i].getAttribute('data-populaire').style.order = i;
        }
        eraseMedia();
        eraseCount();
        displayMedia(photographers.media, findMyId);
        totalCount(total);
    });







    
    // const selectLike = document.querySelectorAll(".likesPhoto");
    totalCount(total);
    // for (let i = 0; i < selectLike.length; i++){
    //     selectLike[i].addEventListener('click', function(){
    //      console.log(selectLike[i]);
    //  }, {once : true}); 
    //  };
   }
}




async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    displayData(photographers);
    
    // if(window.location.pathname === '/photographer.html'){
    //      const media = await getMedia();
    //      displayData(media);
    // }
}

init();
