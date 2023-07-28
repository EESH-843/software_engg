const cartStorageSrc = [];

function storeInCart(source,size) {
    cartattrs = source+"@#"+size;
    if (!(cartStorageSrc.includes(cartattrs))){
        cartStorageSrc.push(cartattrs);
    }
    console.log(cartStorageSrc);
    localStorage.setItem('cartStorage', cartStorageSrc);
}

const wishStorageSrc = [];

function storeInWish(source) {
    if (!(wishStorageSrc.includes(source))){
        wishStorageSrc.push(source);
    }
    console.log(wishStorageSrc);
}

