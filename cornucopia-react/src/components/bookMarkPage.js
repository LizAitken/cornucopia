import React from 'react';
import '../styles/wishList.css';

const BookMark = () => {
    const dynamicURL = `javascript:(function(){document.body.style.background = 'pink';})();`
    return (
        <>
            <div className='bookmarklet-wrap'>
                <h1>Create Your Wish List</h1>
                <div className='instructions'>
                        <div className='first-part'>
                            <h1 className='numbers'>1</h1>
                            <div className='p-wrap'>
                                <p>Add items to your wish list through your bookmark</p>
                            </div>
                            <p>Drag this button to your bookmarks bar:</p>
                            <div className='bookmark-wrap'>
                                <h2 className='bookmarklet'><a href={dynamicURL}>Add to Wish List</a></h2>
                            </div>
                            <div className='p-wrap'>
                                <p>Don't see the bar?</p>
                                <p>Press Command + Shift + B</p>
                            </div>
                         </div>
                         <div className='second-part'>
                            <h1 className='numbers'>2</h1>
                            <div className='p-wrap'>
                                <p>Navigate to Amazon and find an item you would like to add to your wish list.</p>
                            </div>
                        </div>
                        <div className='third-part'>
                            <h1 className='numbers'>3</h1>
                            <div className='p-wrap'>
                                <p>Click on your 'Add to Wish List' bookmarklet!</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default BookMark;