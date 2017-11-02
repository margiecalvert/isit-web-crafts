import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import 'whatwg-fetch';


const siteDirs = [];
const destDirs = [];

const styles = {
    customWidth: {
        width: 500,
    },
};

const items = [];

class MakeHtmlDropDowns extends React.Component {


    constructor() {
        super();
        this.state = {
            walk: 'Generate HTML',
            siteDir: 'unknown',
            destDir: 'unknown',
            configSummary: [],
            value: 1
        };
        //this.state = {
           // makeImage: 'Make Image',
           // makeHtml: 'Make HTML',
           // value: 1
       // };
        this.handleChange = this.handleChange.bind(this);
    }

    generateHtml() {
        console.log(this.state.value);
        console.log(siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = '/makers/walk?siteDirsIndex=' + this.state.value;
        var that = this;
        fetch(query)
            .then(function(response) {
                return response.json();
            })
            .then(function(configSummary) {
                console.log(JSON.stringify(configSummary, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    handleChange(event, index, value) {
        this.setState({value});
    }

     // will need a pre tag where you can display the summary when you generate Html
    //generateHTML button code will appear somewhere in this file for now; will refactor later
    /**
     * @typedef {Object} configSummary
     * @property {Object} siteDirs
     * @property {Object} destinationDirs
     * @property {String} baseDir
     * @property {String} mostRecentDate
     */
    loadConfig() {
        const that = this;
        fetch('/makers/config')
            .then(function (response) {
                return response.json();
            })
            .then(function (configSummary) {
                //console.log('parsed json', JSON.stringify(configSummary, null, 4));
                items.length = 0;
                configSummary.siteDirs.forEach(function (dir, index) {
                    const showDir = configSummary.baseDir + dir;
                    items.push(<MenuItem value={index} key={index} primaryText={showDir} />);
                });
                //this code below has to be reconfigured to push into siteDirs not item
                configSummary.siteDirs.forEach(function (dir, index) {
                    const showDir = configSummary.baseDir + dir;
                    items.push(<MenuItem value={index} key={index} primaryText={showDir} />);
                });
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    componentDidMount() {
        this.loadConfig();
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <h1>Home Page</h1>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    {items}
                </DropDownMenu>

                //below code must be modified for the second menu item
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    {items}
                </DropDownMenu>
                <p>This is a DropDown component.</p>
            </div>
        </MuiThemeProvider>
    };
}

var buttonStyle = {
    margin: '15px'
};

export default MakeHtmlDropDowns;
