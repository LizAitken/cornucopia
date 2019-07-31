import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


class FirstView extends Component {
    state = {
      items: [],
      loggedin: false
    };

    render(){
        return(
            <>
                <h1>'First view'</h1>
            </>
        )
    }
}

export default FirstView;