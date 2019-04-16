import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Menu from '../../blocks/Menu/Menu';
import Information from '../Information/Information';

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

const Main = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <Menu/>
            <Information id={props.match.params.id} />
        </div>
    );
};

export default withStyles(styles)(Main);