import React from 'react';

import SimpleModal from '../../blocks/Modal/SimpleModal';
import data from '../../data/data';

import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    heroUnit: {
        height: '80vh',
        display: 'flex'
    },
    heroContent: {
        maxWidth: 1200,
        margin: 'auto',
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    }
});

class Information extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            needRespiration: false,
        };
    }

    runFunction = (func) => {
        if (func) {
            func.call(this);
            // Если функция передается в виде строки то расскомментировать нижнюю, закомментировать верхнюю.
            // Function(func).bind(this)();
        }
    };

    render() {
        const { classes, id } = this.props;
        const currentData = data.find((el) => el.id === Number(id));

        if (!currentData) {
            return <Redirect to='/notfound' />
        }

        if (!this.state.needRespiration && id >= 12) {
            currentData.finish = true;
        }

        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <SimpleModal />

                <div mx="auto" className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {currentData.title}
                        </Typography>

                            {
                                currentData.notification ?
                                    <Typography component="h2" variant="h5" align="center" color="textPrimary" gutterBottom dangerouslySetInnerHTML={{__html: currentData.notification}}/>
                                    : ''
                            }

                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                {
                                    currentData.prevId ?
                                        <Grid item>
                                            <Link color="primary" size="large" to={`/main/${currentData.prevId}`}>
                                                <Button variant="contained" color="primary" size="large">
                                                    Назад
                                                </Button>
                                            </Link>
                                        </Grid>
                                        : ''
                                }
                                {
                                    currentData.actionButtom ?
                                        currentData.actionButtom.map(function(action) {
                                            return (
                                                <Grid item>
                                                    <Link color="primary" size="large" to={`/main/${action.nextId}`}>
                                                        <Button onClick={() => this.runFunction(action.func)} variant="contained" color="secondary" size="large">
                                                            {action.title}
                                                        </Button>
                                                    </Link>
                                                </Grid>
                                            );
                                        }, this)
                                        : ''
                                }
                                {
                                    currentData.nextId || currentData.finish ?
                                        <Grid item>
                                            <Link color="primary" size="large" to={currentData.finish ? '/finish' :`/main/${currentData.nextId}`}>
                                                <Button variant="contained" color="primary" size="large">
                                                    {currentData.finish ? 'Конец' : 'Вперед'}
                                                </Button>
                                            </Link>
                                        </Grid>
                                        : ''
                                }
                            </Grid>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Information);
