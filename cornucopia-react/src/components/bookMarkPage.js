import React from 'react';
import '../styles/wishList.css';

const BookMark = (props) => {
    const { user } = props;
    // console.log('bookmark user:', user);
    // console.log('bookmark user id:', user.ngo_id);
    const currentNGOid = user.ngo_id;   
    const encodedURL = `javascript:((function()%7Btry%7Bdocument.cookie.split(%22%3B%22).forEach(function(c)%20%7B%20document.cookie%20%3D%20c.replace(%2F%5E%20%2B%2F%2C%20%22%22).replace(%2F%3D.*%2F%2C%20%22%3D%3Bexpires%3D%22%20%2B%20new%20Date().toUTCString()%20%2B%20%22%3Bpath%3D%2F%22)%3B%20%7D)%3Blet%20wrapper%3D%20document.createElement('div')%3Bwrapper.style.width%3D'100%25'%3Bwrapper.style.height%3D'100%25'%3Bwrapper.style.zIndex%3D%20'100'%3Bwrapper.style.position%3D'fixed'%3Bwrapper.style.display%3D%20'flex'%3Bwrapper.style.justifyContent%3D%20'center'%3Blet%20itemBox%20%3D%20document.querySelector('%23dp')%3BitemBox.parentNode.insertBefore(wrapper%2C%20itemBox)%3Blet%20box%20%3D%20document.createElement('div')%3Bwrapper.appendChild(box)%3Bbox.setAttribute('id'%2C%20'box')%3Bbox.style.width%3D%20'70%25'%3Bbox.style.height%3D%20'420px'%3Bbox.style.overflow%3D%20'auto'%3Bbox.style.zIndex%3D%20'101'%3Bbox.style.borderRadius%3D%20'10px'%3Bbox.style.border%3D%20'3px%20solid%20black'%3Bbox.style.backgroundColor%3D%20'%23A8D0E6'%3Bbox.style.fontFamily%3D%20'Literata%2C%20serif'%3Blet%20topWrap%20%3D%20document.createElement('div')%3Bbox.appendChild(topWrap)%3BtopWrap.style.display%3D%20'flex'%3BtopWrap.style.flexDirection%3D'row'%3BtopWrap.style.justifyContent%3D'space-between'%3BtopWrap.style.backgroundColor%3D'%23313b67'%3BtopWrap.style.color%3D'white'%3BtopWrap.style.boxShadow%3D%20'0%200%2020px%20rgba(0%2C0%2C0%2C0.3)'%3Blet%20topText%20%3D%20document.createElement('h1')%3BtopText.textContent%20%3D%20'Cornucopia'%3BtopText.style.padding%20%3D%20'8px'%3BtopWrap.appendChild(topText)%3Blet%20exit%20%3D%20document.createElement('p')%3Bexit.textContent%20%3D'X'%3Bexit.style.fontSize%20%3D%20'15px'%3Bexit.style.cursor%20%3D%20'pointer'%3Bexit.style.padding%20%3D%20'8px'%3BtopWrap.appendChild(exit)%3Blet%20secondWrap%20%3D%20document.createElement('div')%3BsecondWrap.style.textAlign%20%3D%20'center'%3BsecondWrap.style.margin%20%3D%20'10px'%3Bbox.appendChild(secondWrap)%3Blet%20wishListTitle%20%3D%20document.createElement('h2')%3Blet%20storeName%20%3D%20document.createElement('h4')%3BstoreName.textContent%20%3D%20'Amazon'%3Blet%20storeNameValue%20%3D%20storeName.textContent%3BwishListTitle.textContent%20%3D%20%60Add%20Item%20from%20%24%7BstoreNameValue%7D%3F%60%3BsecondWrap.appendChild(wishListTitle)%3Blet%20title1%20%3D%20document.getElementById('title').textContent%3Blet%20title%20%3D%20document.createElement('p')%3Btitle.textContent%20%3D%20title1%3Btitle.style.fontSize%20%3D%20'16px'%3Bfunction%20replaceSingleQuotes(stringInput)%20%7Blet%20newStringInput%20%3D%20stringInput.replace(%2F'%2Fg%2C%20%22''%22)%3Breturn%20newStringInput%3B%7Dlet%20newtitleString%20%3D%20replaceSingleQuotes(title1)%3BsecondWrap.appendChild(title)%3Bfunction%20displayBookmarklet()%20%7Blet%20original%20%3D%20document.querySelector('%23priceblock_ourprice')%20%7C%7C%20document.querySelector('%23newPitchPriceWrapper_feature_div')%3Blet%20price1%20%3D%20original.textContent%3Blet%20price%20%3D%20document.createElement('p')%3Bprice.textContent%20%3D%20price1%3Bprice.style.textAlign%20%3D%20'center'%3Bprice.style.fontSize%20%3D%20'21px'%3Bprice.style.fontWeight%20%3D%20'bold'%3Bfunction%20getThePeriod(stringInput)%20%7Blet%20newNumber%20%3D%20Number.parseFloat(stringInput).toFixed(2)%3Breturn%20newNumber%3B%7DgetThePeriod(price1)%3Bprice.textContent%20%3D%20price1%3Bbox.appendChild(price)%3Blet%20imageInputWrap%20%3D%20document.createElement('div')%3BimageInputWrap.style.display%20%3D%20'flex'%3BimageInputWrap.style.flexDirection%20%3D%20'row'%3BimageInputWrap.style.justifyContent%20%3D%20'center'%3Bbox.appendChild(imageInputWrap)%3Blet%20imageWrap%20%20%3D%20document.createElement('div')%3BimageWrap.style.objectFit%3D'fill'%3BimageWrap.style.marginRight%20%3D%20'18px'%3BimageInputWrap.appendChild(imageWrap)%3Blet%20image1%20%3D%20document.querySelector('%23landingImage')%20%7C%7C%20document.querySelector('%23main-image')%3Blet%20image2%20%3D%20image1.getAttribute('src')%3Blet%20image%20%3D%20document.createElement('img')%3Bimage.setAttribute('src'%2C%20image2)%3Bimage.style.margin%3D%20'15px'%3Bimage.style.height%3D%20'12rem'%3Bimage.style.maxWidth%3D%20'300px'%3Bimage.style.objectFit%3D%20'contain'%3BimageWrap.appendChild(image)%3Blet%20inputsWrap%20%3D%20document.createElement('div')%3BinputsWrap.style.display%20%3D%20'flex'%3BinputsWrap.style.flexDirection%20%3D%20'column'%3BinputsWrap.style.justifyContent%20%3D%20'center'%3BimageInputWrap.appendChild(inputsWrap)%3Blet%20labelQuantity%20%3D%20document.createElement('p')%3BlabelQuantity.textContent%20%3D%20'How%20many%20do%20you%20need%3F'%3BlabelQuantity.style.fontWeight%20%3D%20'bold'%3BlabelQuantity.style.fontSize%20%3D%20'19px'%3BinputsWrap.appendChild(labelQuantity)%3Blet%20inputWrap%20%3D%20document.createElement('p')%3BinputsWrap.appendChild(inputWrap)%3Blet%20inputQuantity%20%3D%20document.createElement('input')%3BinputQuantity.setAttribute('type'%2C%20'text')%3BinputQuantity.setAttribute('value'%2C%20'1')%3BinputsWrap.appendChild(inputQuantity)%3Blet%20submitButton%20%3D%20document.createElement('button')%3BsubmitButton.textContent%20%3D%20'Add%20to%20My%20Wish%20List'%3BsubmitButton.style.fontWeight%20%3D%20'bold'%3BsubmitButton.style.marginTop%20%3D%20'18px'%3BsubmitButton.style.fontSize%20%3D%20'16px'%3BsubmitButton.style.border%20%3D%20'1px%20solid%20black'%3BsubmitButton.style.borderRadius%20%3D%20'15px'%3BinputsWrap.appendChild(submitButton)%3Blet%20thankYou%20%3D%20document.createElement('p')%3BthankYou.textContent%3D'Added%20to%20Wish%20List!'%3BthankYou.style.textAlign%3D'center'%3BthankYou.style.margin%3D%20'15px'%3BthankYou.style.fontSize%20%3D%20'18px'%3BthankYou.style.fontWeight%20%3D%20'bold'%3BthankYou.style.display%20%3D%20'none'%3BinputsWrap.appendChild(thankYou)%3Bconst%20currentURL%20%3D%20window.location.href%3Blet%20newQuantity%20%3D%20Number(inputQuantity.value)%3Blet%20encodedTitle%20%3D%20encodeURIComponent(newtitleString)%3Bif%20(%2FAndroid%7CMobile%7CwebOS%7CiPhone%7CiPad%7CiPod%7CBlackBerry%7CBB%7CPlayBook%7CIEMobile%7CWindows%20Phone%7CKindle%7CSilk%7COpera%20Mini%2Fi.test(navigator.userAgent))%20%7Bbox.style.height%3D%20'510px'%3BtopText.style.padding%20%3D%20'4px'%3Bprice.style.margin%20%3D%20'10px'%3Bprice.style.padding%20%3D%20'0'%3Bprice.style.fontSize%20%3D%20'16px'%3BimageInputWrap.style.flexDirection%20%3D%20'column'%3BimageInputWrap.style.justifyItems%20%3D%20'center'%3BimageInputWrap.style.textAlign%20%3D%20'center'%3BimageWrap.style.marginRight%20%3D%20'0'%3Bimage.style.margin%3D%20'12px'%3BlabelName.style.marginTop%20%3D%20'5px'%3B%7Dconst%20zeroValue%20%3D%200%3Bfunction%20sendInfo()%20%7Blet%20url%20%3D%20%60http%3A%2F%2Flocalhost%3A3000%2Fdonations%2Fwish-list-item-entry%3Fdonation_name%3D%24%7BencodedTitle%7D%26donation_cost%3D%24%7Bprice1%7D%26donation_photo%3D%24%7Bimage2%7D%26donation_amount%3D%24%7BnewQuantity%7D%26number_purchased%3D%24%7BzeroValue%7D%26donation_store_name%3D%24%7BstoreNameValue%7D%26donation_receiver%3D%24%7B${currentNGOid}%7D%26store_link%3D%24%7BcurrentURL%7D%60%3Breturn%20fetch(url%2C%20%7Bmethod%3A%20'POST'%7D).then(response%20%3D%3E%20response.json())%3B%7Dexit.addEventListener('click'%2C%20function(e)%20%7Be.preventDefault.default%3Bwrapper.style.display%3D'none'%3B%7D)%3BsubmitButton.addEventListener('click'%2C%20function(e)%20%7Be.preventDefault%3BnewQuantity%20%3D%20Number(inputQuantity.value)%3BnewQuantity%20%3D%3D%3D%200%20%3F%20alert('Please%20enter%20the%20quantity!')%3AsendInfo()%3BthankYou.style.display%3D'block'%3B%7D)%3B%7DdisplayBookmarklet()%3B%7D%20catch(error)%20%7Balert('We%20could%20not%20read%20this%20page.%20Please%20go%20to%20an%20Amazon%20Item%20page!')%3B%7D%7D)())`
       
    return (
        <>
            <div className='bookmarklet-wrap'>
                <h1 className='bookmarklet-title'>Create Your Wish List</h1>
                <div className='instructions'>
                        <div className='first-part'>
                            <h1 className='wishlist-numbers'>1</h1>
                            <div className='p-wrap'>
                                <p>Add items to your wish list through your bookmark</p>
                                <p>Drag this button to your bookmarks bar:</p>
                            </div>
                            <div className='bookmark-wrap'>
                                <h2 className='bookmarklet'><a href={encodedURL}>Add to Wish List</a></h2>
                            </div>
                            <div className='p-wrap'>
                                <p>Don't see the bar?</p>
                                <p>Press Command + Shift + B</p>
                            </div>
                         </div>
                         <div className='second-part'>
                            <h1 className='wishlist-numbers'>2</h1>
                            <div className='p-wrap'>
                                <p>Navigate to <a href='https://www.amazon.com/' target='_blank' rel="noopener noreferrer">Amazon</a> and find an item you would like to add to your wish list.</p>
                            </div>
                        </div>
                        <div className='third-part'>
                            <h1 className='wishlist-numbers'>3</h1>
                            <div className='p-wrap'>
                                <p>While on a specific item, click on your 'Add to Wish List' bookmarklet!</p>
                            </div>
                        </div>
                        <div className='third-part'>
                            <div className='p-wrap'>
                                <h3 className='video-title'>Here's how to add an item to your wish list!</h3>
                                <div className='bookmarklet-video'></div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default BookMark;