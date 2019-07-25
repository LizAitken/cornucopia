

// documentFragment--use after done?
((function(){
    let wrapper= document.createElement('div');
    wrapper.style.width='100%';
    wrapper.style.height='100%';
    wrapper.style.zIndex= '100';
    wrapper.style.position='fixed';
    wrapper.style.display='flex';
    wrapper.style.justifyContent='center';
    wrapper.style.alignContent='center';
    let itemBox = document.querySelector('#dp-container');
    itemBox.parentNode.insertBefore(wrapper, itemBox);
    let box = document.createElement('div');
    wrapper.appendChild(box);
    console.log(box);
    box.setAttribute('id', 'box');
    box.style.width='60%';
    box.style.height='60%';
    box.style.zIndex= '101';
    box.style.borderRadius='10px';
    box.style.border='3px solid black';
    box.style.backgroundColor='#A8D0E6';
    let topText = document.createTextNode('Cornucopia');
    box.appendChild(topText);
    let wishListTitle = document.createTextNode('Add Item to Your Wish List?');
    box.appendChild(wishListTitle);
    let title1 = document.getElementById('productTitle').textContent;
    let title = document.createElement('p');
    title.textContent = title1;
    box.appendChild(title);
    let price1 = document.querySelector('#priceblock_ourprice').textContent;
    let price = document.createElement('p');
    price.textContent = price1;
    box.appendChild(price);
    let imageWrap  = document.createElement('div');
    imageWrap.style.objectFit='fill';
    box.appendChild(imageWrap);
    let image1 = document.querySelector('#landingImage');
    let image2 = image1.getAttribute('src');
    let image = document.createElement('img');
    image.setAttribute('src', image2);
    image.style.margin= '10px';
    image.style.height= '12rem';
    image.style.maxWidth= '300px';
    image.style.objectFit= 'contain';
    imageWrap.appendChild(image);
    let inputWrap = document.createElement('p');
    box.appendChild(inputWrap);
    let inputQuantity = document.createElement('input');
    inputQuantity.setAttribute('type', 'text');
    inputQuantity.setAttribute('value', '1');
    inputWrap.appendChild(inputQuantity);
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Add to My Wish List';
    box.appendChild(submitButton);
    let encodedTitle = encodeURIComponent(title1);
    let encodedPrice = encodeURIComponent(price1);
    let encodedImage = encodeURIComponent(image2);
    let encodedQuantity = encodeURIComponent(inputQuantity.value);
    submitButton.addEventListener('click', function(e) {
        e.preventDefault;
        alert('Working button');
    })
})())











