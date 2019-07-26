

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
    box.style.height='70%';
    box.style.zIndex= '101';
    box.style.borderRadius='10px';
    box.style.border='3px solid black';
    box.style.backgroundColor='#A8D0E6';
    let topText = document.createElement('h1');
    topText.textContent = 'Cornucopia';
    box.appendChild(topText);
    let wishListTitle = document.createElement('h2');
    wishListTitle.textContent = 'Add Item to Your Wish List?';
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
    let labelQuantity = document.createElement('p');
    labelQuantity.textContent = 'How many do you need?';
    box.appendChild(labelQuantity);
    let inputWrap = document.createElement('p');
    box.appendChild(inputWrap);
    let inputQuantity = document.createElement('input');
    inputQuantity.setAttribute('type', 'text');   
    inputQuantity.setAttribute('value', '0');
    inputWrap.appendChild(inputQuantity);
    let labelName = document.createElement('p');
    labelName.textContent = 'Non-Profit ID:';
    box.appendChild(labelName);
    let ngoNameWrap = document.createElement('p');
    box.appendChild(ngoNameWrap);
    let ngoName = document.createElement('input');
    ngoName.setAttribute('type', 'text');
    ngoName.setAttribute('placeholder', 'Please type your Non-Profit ID here');
    ngoName.setAttribute('value', '0');
    ngoNameWrap.appendChild(ngoName);
    let storeName = document.createElement('h4');
    storeName.textContent = 'Amazon';
    let storeNameValue = storeName.textContent;
    box.appendChild(storeName);
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Add to My Wish List';
    box.appendChild(submitButton);
    let NGOnameValue = Number(ngoName.value);
    let newQuantity = Number(inputQuantity.value);
    const currentURL = window.location.href;
    const url = `http://localhost:3000/donations/wish-list-item-entry?donation_name=${title1}&donation_cost=${price1}&donation_photo=${image2}&donation_amount=${newQuantity}&donation_store_name=${storeNameValue}&donation_receiver=${NGOnameValue}&store_link=${currentURL}`;     
    function sendInfo(url) {
        return fetch(url, {
            method: 'POST'
        }).then(response => response.json());
    }
    submitButton.addEventListener('click', function(e) {
        e.preventDefault;
        if (newQuantity === 0 || NGOnameValue === 0) {
            alert('Please enter the quantity and your non-profit ID!');
        } else {
            sendInfo(url);
        }
        
    }); 
})())

let inputQuantityValue = inputQuantity.value;

let encodedTitle = encodeURIComponent(title1);
    let encodedPrice = encodeURIComponent(price1);
    let encodedImage = encodeURIComponent(image2);
    let encodedQuantity = encodeURIComponent(inputQuantity.value);
    let encodedNGOname = encodeURIComponent(ngoName.value);
    let encodedStoreName = encodeURIComponent(storeName);
    let encodedCurrentURL = encodeURIComponent(currentURL); 









