import { mediaFactory } from "https://rich-tech-18.github.io/Front-End-Fisheye/scripts/factories/media.js";

export function countLikes(photograph, id){
    let sum = 0;
    photograph.media.forEach((photographer) => {
        if(photographer.photographerId === id){
               sum += photographer.likes;
           }     
   });
   return sum; 
}




// export function selectSort(array, value, element){
//     const selectOptionSort = document.getElementById("select-sort");
//         selectOptionSort.addEventListener("input", function(){
//             if(selectOptionSort.value === value){
//                 array.sort(function(a, b){
//                         if (a.element < b.element){
//                             return -1;
//                         }else{
//                             return 1;
//                         }
//                     });
//                     console.log(array);
//             }
//             console.log(selectOptionSort.value);
//         });
//         console.log(array);
//         return array;
// }


export function displayMedia(array, id){
    array.forEach((array) => {
        const photographBody = document.querySelector(".photograph-body");
        if(array.photographerId === id){
               const photographerMedia = mediaFactory(array);
               const userMedia = photographerMedia.getMediaCardDOM();
               photographBody.appendChild(userMedia);
           }
           
   });         
}

export function eraseMedia(){
    const photographBody = document.querySelector(".photograph-body");
    photographBody.innerHTML = "";
}


export function totalCount(numberLike){  
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

export function eraseCount(){
    const divLike = document.querySelector(".photograph-price");
    const totalCount = document.querySelector("#totalCount");
    divLike.removeChild(totalCount);
}
