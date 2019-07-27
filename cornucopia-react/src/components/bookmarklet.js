
 wrapper.style.alignContent='center';
// documentFragment--use after done?
((function(){
    let wrapper= document.createElement('div');
    wrapper.style.width='100%';
    wrapper.style.height='100%';
    wrapper.style.zIndex= '100';
    wrapper.style.position='fixed';
    wrapper.style.display= 'flex';
    wrapper.style.justifyContent= 'center';
    let itemBox = document.querySelector('#dp-container');
    itemBox.parentNode.insertBefore(wrapper, itemBox);
    let box = document.createElement('div');
    wrapper.appendChild(box);
    console.log(box);
    box.setAttribute('id', 'box');
    box.style.width= '60%';
    box.style.height= '400px';
    box.style.overflow= 'auto';
    box.style.zIndex= '101';
    box.style.borderRadius= '10px';
    box.style.border= '3px solid black';
    box.style.backgroundColor= '#A8D0E6';
    box.style.fontFamily= 'Literata, serif';
    let topWrap = document.createElement('div');
    box.appendChild(topWrap);
    topWrap.style.display= 'flex';
    topWrap.style.flexDirection='row';
    topWrap.style.justifyContent='space-between';
    topWrap.style.backgroundColor='#313b67';
    topWrap.style.color='white';
    let topText = document.createElement('h1');
    topText.textContent = 'Cornucopia';
    topWrap.appendChild(topText);
    let exit = document.createElement('p');
    exit.textContent ='X';
    topWrap.appendChild(exit);
    exit.style.border = 'solid 2px black';
    exit.style.width ='20px';
    exit.style.height = '20px';
    let secondWrap = document.createElement('div');
    secondWrap.style.textAlign = 'center';
    box.appendChild(secondWrap);
    let wishListTitle = document.createElement('h2');
    let storeName = document.createElement('h4');
    storeName.textContent = 'Amazon';
    let storeNameValue = storeName.textContent;
    wishListTitle.textContent = `Add Item from ${storeNameValue}?`;
    secondWrap.appendChild(wishListTitle);
    let title1 = document.getElementById('productTitle').textContent;
    let title = document.createElement('p');
    title.textContent = title1;
    secondWrap.appendChild(title);
    let price1 = document.querySelector('#priceblock_ourprice').textContent;
    let price = document.createElement('p');
    price.textContent = price1;
    price.style.textAlign = 'center';
    box.appendChild(price);
    let imageInputWrap = document.createElement('div');
    imageInputWrap.style.display = 'flex';
    imageInputWrap.style.flexDirection = 'row';
    imageInputWrap.style.justifyContent = 'center';
    box.appendChild(imageInputWrap);
    let imageWrap  = document.createElement('div');
    imageWrap.style.objectFit='fill';
    imageInputWrap.appendChild(imageWrap);
    let image1 = document.querySelector('#landingImage');
    let image2 = image1.getAttribute('src');
    let image = document.createElement('img');
    image.setAttribute('src', image2);
    image.style.margin= '15px';
    image.style.height= '12rem';
    image.style.maxWidth= '300px';
    image.style.objectFit= 'contain';
    imageWrap.appendChild(image);
    let inputsWrap = document.createElement('div');
    imageInputWrap.appendChild(inputsWrap);
    let labelQuantity = document.createElement('p');
    labelQuantity.textContent = 'How many do you need?';
    inputsWrap.appendChild(labelQuantity);
    let inputWrap = document.createElement('p');
    inputsWrap.appendChild(inputWrap);
    let inputQuantity = document.createElement('input');
    inputQuantity.setAttribute('type', 'text');   
    inputQuantity.setAttribute('value', '1');
    inputsWrap.appendChild(inputQuantity);
    let labelName = document.createElement('p');
    labelName.textContent = 'Non-Profit ID:';
    inputsWrap.appendChild(labelName);
    let ngoNameWrap = document.createElement('p');
    inputsWrap.appendChild(ngoNameWrap);
    let ngoName = document.createElement('input');
    ngoName.setAttribute('type', 'text');
    ngoName.setAttribute('placeholder', 'Please type your Non-Profit ID here');
    ngoName.setAttribute('value', '0');
    ngoNameWrap.appendChild(ngoName);
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Add to My Wish List';
    inputsWrap.appendChild(submitButton);
    const currentURL = window.location.href;  
    let NGOnameValue = Number(ngoName.value);
    let newQuantity = Number(inputQuantity.value);
    let encodedTitle = encodeURIComponent(title1);  
    function sendInfo() { 
        let url = `http://localhost:3000/donations/wish-list-item-entry?donation_name=${encodedTitle}&donation_cost=${price1}&donation_photo=${image2}&donation_amount=${newQuantity}&donation_store_name=${storeNameValue}&donation_receiver=${NGOnameValue}&store_link=${currentURL}`;
        return fetch(url, {
            method: 'POST'
        }).then(response => response.json());
    }
    exit.addEventListener('click', function(e) {
        e.preventDefault.default;
        wrapper.style.display='none';
    });
    submitButton.addEventListener('click', function(e) {
        e.preventDefault;
        NGOnameValue = Number(ngoName.value);
        newQuantity = Number(inputQuantity.value); 
        newQuantity === 0 || NGOnameValue === 0 ? alert('Please enter the quantity and your non-profit ID!'): sendInfo(); wrapper.style.display='none';                
    }); 
})())

let title2 = title1.replace(/%20/g, ' ');
 
if (newQuantity === 0 || NGOnameValue === 0) {
    alert('Please enter the quantity and your non-profit ID!');
} else {
    sendInfo();
    wrapper.style.display='none';
}








