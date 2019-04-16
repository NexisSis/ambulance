import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/createMuiTheme';
import './index.css'

import Start from './views/Start/Start';
import Main from "./views/Main/Main";
import Finish from "./views/Finish/Finish";
import Notfound from "./views/Notfound/Notfound";

const App = () => {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/start" exact component={Start} />
                        <Route path="/main/:id" component={Main} />
                        <Route path="/finish" exact component={Finish}/>
                        <Route component={Notfound} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
};

ReactDOM.render(<App />, document.getElementById('root'));
