import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SimpleModal from '../../blocks/Modal/SimpleModal';

import './Information.css';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    wrapper: {
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap'
    },
    w100: { width: '100%'},
    center: {
        margin: 'auto',
        display: 'block'
    },
    minusTop50: {
        marginTop:'-50px'
    }

});

function Information (props){
    const { classes } = props;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />

            <SimpleModal />

            <div className={classes.wrapper}>
                <Typography className={classes.w100} component="h2" variant="h2" align="center" color="textPrimary">
                    Скорая. Что у Вас случилось?
                </Typography>
                <Typography className={classes.minusTop50} variant="h6" align="center" color="textSecondary" paragraph>
                    Уточните у сведетеля происшествия что происходит и по какой причине он решил позвонить. И как всегда
                    немного текста для того, что бы показать, что нужно примерно такое количество текста, что б выглядело ок.
                </Typography>
            </div>
            <Button className={classes.center} variant="contained" color="primary" size="large" align="center">
                Далее
            </Button>
        </main>
    );
}

export default withStyles(styles)(Information);
