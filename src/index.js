import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/createMuiTheme';
import './index.css'

import Start from './views/Start/Start';
import Main from "./views/Main/Main";
import Finish from "./views/Finish/Finish";
import Notfound from "./views/Notfound/Notfound";
import Logs from "./views/Logs/Logs";
import { set } from './db/db';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startTime: null,
            acceptAddress: null,
            age: null,
            compressionsType: null,
            compressionTime: null,
            finishedTime: null,
        };
        this.dbHandlerStartTime = this.dbHandlerStartTime.bind(this);

    }

    dbHandlerStartTime = (startTime) => {
        this.setState(startTime);

    };

    dbHandlerAddress = (acceptAddress) => {
        this.setState(acceptAddress);
    };

    dbHandlerAge = (age) => {
        this.setState( age );
    };

    dbHandlerCompression = (compressionsType,compressionTime) => {
        this.setState(compressionsType);
        this.setState(compressionTime);
    };

    dbSaveWithFinishedTime = (finishedTime) => {
        console.log("TO DB",Object.assign({}, this.state, finishedTime));
        set(Object.assign({}, this.state, finishedTime));
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/start" exact render={
                            (routeProps) => (
                                <Start {...routeProps} dbHandlerStartTime={this.dbHandlerStartTime} />)
                            }
                        />
                        <Route path="/main/-1" exact
                               render={
                                   (routeProps) => (<Finish {...routeProps} dbSave={this.dbSaveWithFinishedTime} />)
                               }
                        />
                        <Route path="/main/:id" exact
                               render={
                                   (routeProps) => (
                                       <Main {...routeProps}
                                             dbHandlerAddress={this.dbHandlerAddress}
                                             dbHandlerAge={this.dbHandlerAge}
                                             dbHandlerCompression={this.dbHandlerCompression}
                                       />)
                               }
                        />
                        <Route path="/finish" exact
                               render={
                                   (routeProps) => (
                                       <Finish {...routeProps} dbSaveWithFinishedTime={this.dbSaveWithFinishedTime}/>)
                               }
                        />
                        <Route path="/logs" exact component={Logs}/>
                        <Route path="/" render={
                            (routeProps) => (
                                <Start {...routeProps} dbHandlerStartTime={this.dbHandlerStartTime} />)
                        }/>
                        <Route component={Notfound}/>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
