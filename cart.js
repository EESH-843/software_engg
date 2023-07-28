window.addEventListener('load', () => {
    //const cartStorageSrc = localStorage.getItem('cartStorage');

    const cartStorageSrc = ['http://127.0.0.1:5500/Assets/Model2.jpeg@#Off White Shirt@#M','http://127.0.0.1:5500/Assets/Model2.jpeg@#Off White Shirt@#L','http://127.0.0.1:5500/Assets/Model6.jpeg@#Patterned Maroon Shirt@#XS']

    if (cartStorageSrc == null) {
        const emptyCartMsg = document.createElement('h3');
        var listclass = document.getElementById('listclass');
        emptyCartMsg.textContent = 'The Cart is Currently Empty';
        listclass.appendChild(emptyCartMsg);
    } else {
        var items = [];

        cartStorageSrc.forEach(i => {
            i.slice(22);
            items.push(i.split("@#"));
        })

        const list = document.getElementById("list");

        items.forEach(item => {
            console.log(item);
            const li = document.createElement("li");
            const div = document.createElement("div");
            const img = document.createElement("div");
            const productData = document.createElement("div");
            const btnDiv = document.createElement("div");
            const btn = document.createElement("button");

            div.className = "listItem";

            img.id = "cartItemImage";
            img.setAttribute('src', item[0]);
            img.setAttribute('style', 'border: solid 1px grey; border-radius: 10px;');

            productData.className = "productData";
            productData.setAttribute('style', 'white-space: pre;');
            productData.textContent = 'Name: ' + item[1];
            productData.textContent = productData.textContent + '\r\nSize: ' + item[2];

            btnDiv.className = "removeButton";
            btn.className = "btn";

            btn.textContent = "Remove from Cart";

            btnDiv.appendChild(btn);
            div.appendChild(img);
            div.appendChild(productData);
            div.appendChild(btnDiv);
            li.appendChild(div);
            list.appendChild(li);
        });
    }

    let cb = document.getElementsByClassName("btn");
    let list = document.getElementById("list");
    for (a of cb) {
    a.addEventListener('click', rem);
    }

    function rem(e) {
    if (confirm('Are you sure you want to remove the item from the list?')) {
        let li = e.target.parentElement.parentElement.parentElement;
        list.removeChild(li);
    }
    }
}); 