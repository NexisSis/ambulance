import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/createMuiTheme';
import './index.css'

import Start from './views/Start/Start';
import Main from "./views/Main/Main";
import Finish from "./views/Finish/Finish";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Route path="/" exact component={Start} />
                    <Route path="/main" exact component={Main} />
                    <Route path="/finish" exact component={Finish}/>
                </Router>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
