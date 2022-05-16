function mediaFactory(data) {
    let { id, photographerId, title, image, likes, date, price, video} = data;


    function getMediaCardDOM() {
        let name = '';
        const div = document.createElement('div');
        const divFlex = document.createElement('div');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const source = document.createElement('source');
        const vids = document.createElement('video');
        const h2 = document.createElement( 'h2' );
        const likePhoto = document.createElement('p');
            if(photographerId === 243){
                name = 'Mimi';
            }
            if(photographerId === 930){
                name = 'Ellie_Rose';
            } 
            if(photographerId === 82){
                name = 'Tracy';
            } 
            if(photographerId === 195){
                name = 'Marcel';
            } 
            if(photographerId === 527){
                name = 'Nabeel';
            } 
            if(photographerId === 925){
                name = 'Rhode';
            } 
        const mediaFind = `assets/images/${name}/${image}`;
        const media = document.createElement('media');
            if(mediaFind.endsWith('.jpg')){
                img.setAttribute("src", mediaFind.replaceAll(' ', '_'));
                img.setAttribute("alt", 'portrait de '+ title);
                img.setAttribute("aria-label", 'photo de ' + title);
                img.setAttribute("role", "img");
                img.setAttribute("data-id", id);
                article.appendChild(img);
                article.setAttribute('data-media', image);

                img.addEventListener('click', function(){
                    const lightBox = document.querySelector('#lightboxModal');
                    const mediaBox = document.querySelector('#selectLightbox');
                    const displayVideo = document.querySelector('#slider video');
                    const displayImage = document.querySelector('#slider img');
                    const idTitle = document.querySelector('#titleImg')
                    displayImage.style.display = 'block';
                    displayVideo.style.display = 'none';

                    // const divImg = document.createElement('div');
                    // const imgModal = document.createElement('img');
                    mediaBox.setAttribute("src", mediaFind.replaceAll(' ', '_'));
                    mediaBox.setAttribute("alt", 'portrait de '+ title);
                    mediaBox.setAttribute("aria-label", 'photo de ' + title);
                    mediaBox.setAttribute("role", "img");
                    mediaBox.setAttribute("data-id", id);
                    lightBox.setAttribute("aria-hidden", false);


                    idTitle.textContent = title;
                    lightBox.appendChild(idTitle);
                    // media.appendChild(imgModal);
                    // lightBox.appendChild(media);
                    
                    lightBox.style.display = 'flex';
                })
            }
            if(mediaFind.endsWith('undefined')){
                const videoFind = `assets/images/${name}/${video}`;
                
                vids.setAttribute("aria-label", 'video de ' + title);
                vids.setAttribute("data-id", id);
                article.appendChild(vids);
                article.setAttribute('data-media', video);
                source.setAttribute('src', videoFind);
                vids.appendChild(source);

                vids.addEventListener('click', function(){
                const videoBox = document.querySelector('#videoLightBox');
                const lightBox = document.querySelector('#lightboxModal');
                const displayVideo = document.querySelector('#slider video');
                const displayImage = document.querySelector('#slider img');
                displayImage.style.display = 'none';
                displayVideo.style.display = 'block';
                videoBox.setAttribute("src", videoFind.replaceAll(' ', '_'));
                console.log(videoFind);
                    videoBox.setAttribute("alt", 'portrait de '+ title);
                    videoBox.setAttribute("aria-label", 'photo de ' + title);
                    videoBox.setAttribute("role", "img");
                    videoBox.setAttribute("data-id", id);
                    videoBox.setAttribute("controls", "controls");
                    lightBox.setAttribute("aria-hidden", false);
                    lightBox.style.display = 'flex';
                })

            }
        h2.textContent = title;
        likePhoto.classList.add('likesPhoto');   
        likePhoto.textContent = likes;
        likePhoto.addEventListener('click', function(){
            likePhoto.innerHTML = likes += 1;
            // likePhoto.classList.remove('likesPhoto');
            // totalLike.textContent = sum+1;
            // console.log(totalLike);

        }, {once : true}); 
        div.classList.add('divMediaLikePhoto');
        div.appendChild(h2)
        div.appendChild(likePhoto);
        article.appendChild(div);
        article.setAttribute('data-populaire', likes);
        article.setAttribute('data-title', title);
        article.setAttribute('data-date', date);
        const path = `assets/images/${name}/`;
        article.setAttribute('data-path', path);
        return (article);
    };

    function totalCount(numberLike){  
        const selectLike = document.querySelectorAll('.likesPhoto');
        const paraTotal = document.createElement('p');
        const divLike = document.querySelector('.photograph-price');
        
       
        for (let i = 0; i < selectLike.length; i++){
           selectLike[i].addEventListener('click', function(){
            numberLike += 1;
            paraTotal.textContent = numberLike;
            
        }, {once : true}); 
        };
        paraTotal.textContent = numberLike;
      
        
        divLike.appendChild(paraTotal);
        
        return divLike;  
            
    };




    return {id, photographerId, title, image, likes, date, price, video, getMediaCardDOM, totalCount};
   
};
