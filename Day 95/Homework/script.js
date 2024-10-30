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

// 2.

// in images folder

// 3.

// Promise object is some type of promise by computer that it will return some response, it will be "fulfilled" or "rejected", but it will anyways return the response. If it is "fulfilled" that means we took some information from API successfully, if it is "rejected" it means that we failed

