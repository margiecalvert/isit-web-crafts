import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// import {black, red} from 'material-ui/styles/colors';

class HomeButtons extends React.Component {

    constructor() {
        super();

        this.state = {
          home: 'Go Home'
        };
    }

    goHome() {
        $.publish('home', {
            message : "The user wants to go home."
        });
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <h1>WebCraft Home Page</h1>
                <RaisedButton
                    id="makeHtml"
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}>{this.state.home}</RaisedButton>


                <p>This is a react component.</p>
            </div>
        </MuiThemeProvider>;
    };
}

var buttonStyle = {
    margin: '15px'
};

export default HomeButtons;