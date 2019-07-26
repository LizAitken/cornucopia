import React from 'react';

const BookMark = () => {
    const dynamicURL = `javascript:(function(){document.body.style.background = 'pink';})();`
    return (
        <>
            <h2>Add our book mark to your bookmark bar in order to add items to your registry.</h2>
            <p>At this time, we support only Amazon</p>
            <h2><a href={dynamicURL}>Add to Wish List</a></h2>
        </>
    )
}

export default BookMark;