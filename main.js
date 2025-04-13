var content = document.getElementById("content");

fetch(`https://fakestoreapi.com/products`) 
.then (result => result.json())
.then (result => {
    
    result.forEach(element => {

        content.innerHTML += `
        
        <div class="product">
            <img src="${element.image}" alt="">
            <div class="description">
                <p>${element.title}</p>
                <p>Price: ${element.price}$ </p>
                <hr>
                <p>Category: ${element.category}</p>
                <hr>
            </div>
        </div>
       
        `
    });
})
