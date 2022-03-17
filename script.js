const cards1 = document.querySelector(".cards");

const api = "https://fakestoreapi.com/products";

fetch(api)
.then((data) => {
    return data.json();  
})
.then((completeData)=>{
    console.log(completeData);

    let cards= '';
    completeData.map((data)=>{
        cards+= `<div class="card">
            <h3>${data.title}</h3>
            <img src="${data.image}" alt="">
            <p>${data.description}</p>
            <p>${data.category}</p>
            <p>${data.price}</p>
    </div> `
    })
    cards1.innerHTML = cards;





})