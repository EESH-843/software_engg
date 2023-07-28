const imgSrc = [];

window.addEventListener('load', () => {
    const name = localStorage.getItem('myDivData');
    document.getElementById('title').innerHTML = name;
    document.getElementById('itemName').innerHTML = name;
    
    const storedImgSrc = localStorage.getItem('myImgSrc');
    const output = document.getElementById('clothingImage');
    const img = document.createElement('img');
    img.src = storedImgSrc;

    imgSrc.push(img.src);

    img.width = 700;
    img.setAttribute("style", "border: solid 1px grey; border-radius: 10px;");
    output.appendChild(img);

    localStorage.setItem('alertType', 'danger');
});
var idx =0;
function selectButton(buttonIndex) {
    localStorage.setItem('alertType', 'success');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        if (index === buttonIndex - 1) {
            button.classList.add('selected');
            idx = buttonIndex
        } else {
            button.classList.remove('selected');
        }
    });
}

function addToCart() {
    if (idx != 0){
        localStorage.setItem('myImgSrc', imgSrc);
        switch(idx){
            case 1:
                storeInCart(imgSrc[0],"XS");
                break;
            case 2:
                storeInCart(imgSrc[0],"S");
                break;
            case 3:
                storeInCart(imgSrc[0],"M");
                break;
            case 4:
                storeInCart(imgSrc[0],"L");
                break;
            case 5:
                storeInCart(imgSrc[0],"XL");
                break;
        }
    }
}

function addToWish() {
    if (idx != 0){
        localStorage.setItem('myImgSrc', imgSrc);
        storeInWish(imgSrc[0]);
    }
}

