import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Menu from '../../blocks/Menu/Menu';
import Information from '../Information/Information';

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

function Main(props){
    const { classes } = props;
    return(
        <div className={classes.root}>
            <Menu/>
            <Information/>
        </div>
    );
}

export default withStyles(styles)(Main);