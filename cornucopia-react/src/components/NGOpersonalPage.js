import React from 'react';

const NGOpersonalPage = props => {
        const { user } = props;
        
        return(
            <>
                <h1>{user.ngo_name}</h1>
            </>
        );
};

export default NGOpersonalPage;
