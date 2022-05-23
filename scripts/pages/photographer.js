//Mettre le code JavaScript lié à la page photographer.html

// async function getMedia() {
//     return fetch('../data/photographers.json')
//     .then(reponse =>  reponse.json())
//     .then( data  => {return data.media})
//     .catch((err) => console.log(err));
   
// };

// async function initMedia(){
//     const media = await getMedia();
//     displayDataMedia(media);
// };

function countLikes(photograph, id){
    let sum = 0;
    photograph.media.forEach((photographer) => {
        if(photographer.photographerId === id){
               sum += photographer.likes;
           }     
   });
   return sum; 
}


const closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", function(){
    const lightBox = document.querySelector("#lightboxModal");
    lightBox.style.display = "none";
    lightBox.setAttribute("aria-hidden", true);
});


function selectSort(array, value, element){
    const selectOptionSort = document.getElementById("select-sort");
        selectOptionSort.addEventListener("input", function(){
            if(selectOptionSort.value === value){
                array.sort(function(a, b){
                        if (a.element < b.element){
                            return -1;
                        }else{
                            return 1;
                        }
                    });
                    console.log(array);
            }
            console.log(selectOptionSort.value);
        });
        console.log(array);
        return array;
}


function displayMedia(array, id){
    array.forEach((photographer) => {
        const photographBody = document.querySelector(".photograph-body");
        if(photographer.photographerId === id){
               const photographerMedia = mediaFactory(photographer);
               const userMedia = photographerMedia.getMediaCardDOM();
               photographBody.appendChild(userMedia);
           }
           
   });
   const article = document.querySelectorAll("article");
   for(let i = 0; i<article.length; i++){
                   article[i].setAttribute("id", i);
                   
               }
            //    console.log(array.length)
               ;
}

function eraseMedia(){
    const photographBody = document.querySelector(".photograph-body");
    photographBody.innerHTML = "";
}


function totalCount(numberLike){  
    const selectLike = document.querySelectorAll(".likesPhoto");
    const paraTotal = document.createElement("p");
    const divLike = document.querySelector(".photograph-price");
    
   
    for (let i = 0; i < selectLike.length; i++){
       selectLike[i].addEventListener("click", function(){
        numberLike += 1;    
        paraTotal.textContent = numberLike;
        console.log(selectLike[i]);
    }, {once : true}); 
    }
    paraTotal.textContent = numberLike;
    paraTotal.setAttribute("id", "totalCount");
    divLike.appendChild(paraTotal);
    // console.log(numberLike);
    return numberLike;  
        
}

function eraseCount(){
    const divLike = document.querySelector(".photograph-price");
    const totalCount = document.querySelector("#totalCount");
    divLike.removeChild(totalCount);
}



