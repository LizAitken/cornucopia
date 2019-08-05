((function(){
    try{
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        let wrapper= document.createElement('div');
        wrapper.style.width='100%';
        wrapper.style.height='100%';
        wrapper.style.zIndex= '100';
        wrapper.style.position='fixed';
        wrapper.style.display= 'flex';
        wrapper.style.justifyContent= 'center';
        let itemBox = document.querySelector('#dp');
        itemBox.parentNode.insertBefore(wrapper, itemBox);
        let box = document.createElement('div');
        wrapper.appendChild(box);

        box.setAttribute('id', 'box');
        box.style.width= '70%';
        box.style.height= '420px';
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
        topWrap.style.boxShadow= '0 0 20px rgba(0,0,0,0.3)';
        let topText = document.createElement('h1');
        topText.textContent = 'Cornucopia';
        topText.style.padding = '8px';
        topWrap.appendChild(topText);

        let exit = document.createElement('p');
        exit.textContent ='X';
        exit.style.fontSize = '15px';
        exit.style.cursor = 'pointer';
        exit.style.padding = '8px';
        topWrap.appendChild(exit);

        let secondWrap = document.createElement('div');
        secondWrap.style.textAlign = 'center';
        secondWrap.style.margin = '10px';
        box.appendChild(secondWrap);

        let wishListTitle = document.createElement('h2');
        let storeName = document.createElement('h4');
        storeName.textContent = 'Amazon';
        let storeNameValue = storeName.textContent;
        wishListTitle.textContent = `Add Item from ${storeNameValue}?`;
        secondWrap.appendChild(wishListTitle);

        let title1 = document.getElementById('title').textContent;
        let title = document.createElement('p');
        title.textContent = title1;
        title.style.fontSize = '16px';
        function replaceSingleQuotes(stringInput) {
            let newStringInput = stringInput.replace(/'/g, "''");
            return newStringInput;
        }
        let newtitleString = replaceSingleQuotes(title1);
        secondWrap.appendChild(title);
        function displayBookmarklet() {
                let original = document.querySelector('#priceblock_ourprice') || document.querySelector('#newPitchPriceWrapper_feature_div');
                let price1 = original.textContent;           
                let price = document.createElement('p');
                price.textContent = price1;
                price.style.textAlign = 'center';
                price.style.fontSize = '21px';
                price.style.fontWeight = 'bold';
                function getThePeriod(stringInput) {
                    let newNumber = Number.parseFloat(stringInput).toFixed(2);
                    return newNumber;
                }
                getThePeriod(price1);
                price.textContent = price1;
                box.appendChild(price);
            
                let imageInputWrap = document.createElement('div');
                imageInputWrap.style.display = 'flex';
                imageInputWrap.style.flexDirection = 'row';
                imageInputWrap.style.justifyContent = 'center';
                box.appendChild(imageInputWrap);

                let imageWrap  = document.createElement('div');
                imageWrap.style.objectFit='fill';
                imageWrap.style.marginRight = '18px';
                imageInputWrap.appendChild(imageWrap);

                let image1 = document.querySelector('#landingImage') || document.querySelector('#main-image');
                let image2 = image1.getAttribute('src');
                let image = document.createElement('img');
                image.setAttribute('src', image2);
                image.style.margin= '15px';
                image.style.height= '12rem';
                image.style.maxWidth= '300px';
                image.style.objectFit= 'contain';
                imageWrap.appendChild(image);

                let inputsWrap = document.createElement('div');
                inputsWrap.style.display = 'flex';
                inputsWrap.style.flexDirection = 'column';
                inputsWrap.style.justifyContent = 'center';
                imageInputWrap.appendChild(inputsWrap);
                let labelQuantity = document.createElement('p');
                labelQuantity.textContent = 'How many do you need?';
                labelQuantity.style.fontWeight = 'bold';
                labelQuantity.style.fontSize = '19px';
                inputsWrap.appendChild(labelQuantity);

                let inputWrap = document.createElement('p');
                inputsWrap.appendChild(inputWrap);

                let inputQuantity = document.createElement('input');
                inputQuantity.setAttribute('type', 'text');   
                inputQuantity.setAttribute('value', '1');
                inputsWrap.appendChild(inputQuantity);

                let submitButton = document.createElement('button');
                submitButton.textContent = 'Add to My Wish List';
                submitButton.style.fontWeight = 'bold';
                submitButton.style.marginTop = '18px';
                submitButton.style.fontSize = '16px';
                submitButton.style.border = '1px solid black';
                submitButton.style.borderRadius = '15px';
                inputsWrap.appendChild(submitButton);

                let thankYou = document.createElement('p');
                thankYou.textContent='Added to Wish List!';
                thankYou.style.textAlign='center';
                thankYou.style.margin= '15px';
                thankYou.style.fontSize = '18px';
                thankYou.style.fontWeight = 'bold';
                thankYou.style.display = 'none';
                inputsWrap.appendChild(thankYou);

                const currentURL = window.location.href;  
                let newQuantity = Number(inputQuantity.value);
                let encodedTitle = encodeURIComponent(newtitleString);

                if (/Android|Mobile|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                    box.style.height= '510px';
                    topText.style.padding = '4px';
                    price.style.margin = '10px';
                    price.style.padding = '0';
                    price.style.fontSize = '16px';
                    imageInputWrap.style.flexDirection = 'column';
                    imageInputWrap.style.justifyItems = 'center';
                    imageInputWrap.style.textAlign = 'center';
                    imageWrap.style.marginRight = '0';
                    image.style.margin= '12px';
                    labelName.style.marginTop = '5px';
                }
                const zeroValue = 0;  
                function sendInfo() { 
                    let url = `http://localhost:3000/donations/wish-list-item-entry?donation_name=${encodedTitle}&donation_cost=${price1}&donation_photo=${image2}&donation_amount=${newQuantity}&number_purchased=${zeroValue}&donation_store_name=${storeNameValue}&donation_receiver=${currentNGOid}&store_link=${currentURL}`;
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
                    newQuantity = Number(inputQuantity.value); 
                    newQuantity === 0 ? alert('Please enter the quantity!'): 
                        sendInfo();
                        thankYou.style.display='block';                 
                });        
        }
        displayBookmarklet(); 
    } catch(error) {
        alert('We could not read this page. Please go to an Amazon Item page!');
    }
})());
