export function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price} = data;

    const picture = `https://rich-tech-18.github.io/Front-End-Fisheye/assets/photographers/Photographers_ID_Photos/${portrait}`;
    const url  = (new URL(`Front-End-Fisheye/photographer.html?id=${id}`, "https://rich-tech-18.github.io/Front-End-Fisheye"));
    // const searchParam = url.searchParams;
    // const getID = searchParam.get('id');
    // const getToNumber = parseInt(getID);
    
    function getUserCardDOM() {
        const article = document.createElement( "article" );
        const img = document.createElement( "img" );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "portrait de "+ name);
        img.setAttribute("aria-label", name);
        img.setAttribute("role", "img");
        img.classList.add("picturePhotograph");
        const link = document.createElement("a");
        link.setAttribute("href", url);
        const h2 = document.createElement( "h2" );
        h2.textContent = name;
        const location = document.createElement("p");
        location.classList.add("location");
        location.textContent = city + ", " + country;
        const citation = document.createElement("p");
        citation.innerHTML = `<quote>${tagline}</quote>`;
        citation.classList.add("citation");
        const pricePerDay = document.createElement("p");
        pricePerDay.classList.add("price");
        pricePerDay.textContent = price + "€/jour";
        article.appendChild(link);
        link.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(citation);
        article.appendChild(pricePerDay);
        return (article);
    }

    function getUserHeaderDOM(){
        const divName = document.createElement( "div" );
        divName.setAttribute("id", "order1");
        const divPhotographHeader = document.querySelector(".photograph-header");
        const button = document.querySelectorAll(".contact_button");
        button[0].setAttribute("id", "order2");
        const h2 = document.createElement( "h2" );
        h2.id = "colorTitle";
        h2.textContent = name;
        const location = document.createElement("p");
        location.classList.add("location");
        location.textContent = city + ", " + country;
        const citation = document.createElement("p");
        citation.innerHTML = `<quote>${tagline}</quote>`;
        citation.classList.add("citation");
        divPhotographHeader.insertBefore(divName, button[0]);
        divName.appendChild(h2);
        divName.appendChild(location);
        divName.appendChild(citation);
        return (divName);
    }

    function getPhotographerPictureDom(){
        const divPicure = document.createElement( "div" );
        const img = document.createElement( "img" );
        divPicure.setAttribute("id", "order3");
        img.setAttribute("src", picture);
        img.setAttribute("alt", "portrait de "+ name);
        img.setAttribute("aria-label", name);
        img.classList.add("picturePhotograph");
        divPicure.appendChild(img);
        return divPicure;
    }

    function getPhotographerPrice(){
        // const divPrice = document.createElement('div');
        const paraPrice = document.createElement("p");
        paraPrice.textContent = price + "€" +" / " + "Jour";
        // divPrice.appendChild(paraPrice);
        return paraPrice;
    }

    function getPhotographerName(){
        const namePhotograph = document.createElement("p");
        namePhotograph.textContent = name;
        namePhotograph.classList.add("nameModal");
        return namePhotograph;
    }


     
    return { name, picture, id, city, country, tagline, price, getUserCardDOM, getUserHeaderDOM, getPhotographerPictureDom, getPhotographerPrice, getPhotographerName };
   

    // const addPhotographer = new photographerFact(data.name, data.portrait, data.id, data.city, data.country, data.tagline, data.price);
    // return addPhotographer;
}

// class photographerFact {
//     constructor(name, portrait, id, city, country, tagline, price){
//         this.name = name;
//         this.portrait = portrait;
//         this.id = id;
//         this.city = city;
//         this.country = country;
//         this.tagline = tagline;
//         this.price = price;
//     };

//     getUserCardDOM() {
//         const picture = `assets/photographers/${this.portrait}`;
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture);
            // img.setAttribute("alt", 'portrait de '+ this.name)
            // img.setAttribute("aria-label", this.name);
//         const link = document.createElement('a');
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = this.name;
//         const location = document.createElement('p');
//         location.classList.add('location');
//         location.textContent = this.city + ', ' + this.country;
//         const citation = document.createElement('p');
//         citation.innerHTML = `<quote>${this.tagline}</quote>`;
//         citation.classList.add('citation');
//         const pricePerDay = document.createElement('p');
//         pricePerDay.classList.add('price');
//         pricePerDay.textContent = this.price + '€/jour';
//         article.appendChild(link);
//         link.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(location);
//         article.appendChild(citation);
//         article.appendChild(pricePerDay);
//         return (article);
//     };
// };