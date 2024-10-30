// 1.

const div = document.querySelector("#main")

fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
        for(const product of json){
            const html = `
                <div id="${product.id}">
                    <p>${product.title}</p>
                    <img src="${product.image}">
                    <p>$${product.price}</p>
                    <button>Click to see Product</button>
                </div>
            `
            main.insertAdjacentHTML('afterbegin', html)
        }

    })

