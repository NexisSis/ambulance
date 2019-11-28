import React from 'react';

import SimpleModal from '../../blocks/Modal/SimpleModal';
import data from '../../data/data';
import bodr from './bodr.gif';

import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom"

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    imgTop: {
      marginTop: theme.spacing.unit,
    },
    heroUnit: {
        height: '80vh',
        display: 'flex'
    },
    heroContent: {
        maxWidth: 1200,
        margin: 'auto',
        textAlign: 'center',
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    dialog: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: theme.spacing.unit * 3,
    },
    dialogElement: {
        marginRight: theme.spacing.unit * 2,
    }
});

class Information extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            needRespiration: false,
            openDialog: false,
            prevPath: '',
        };
    }



    runFunction = (func) => {
        if (func) {
            func.call(this);
        }
    };

    render() {
        console.log(this.props.location);
        const { classes, id } = this.props;
        const currentData = data.find((el) => el.id === Number(id));

        if (!currentData) {
            return <Redirect to='/notfound' />
        }

        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <SimpleModal />

                <div mx="auto" className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom dangerouslySetInnerHTML={{__html: currentData.title}} />

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
                                currentData.id === 7 ?
                                  <Grid item>
                                    <Link color="primary" size="large" to={this.props.prevPath || `/main/5`}>
                                      <Button variant="contained" color="primary" size="large">
                                        Назад
                                      </Button>
                                    </Link>
                                  </Grid>
                                  : ''
                              }

                              {
                                (!this.state.needRespiration && currentData.id === 12) && (
                                  <Grid item>
                                      <Button onClick={() => this.setState({openDialog: true})} variant="contained" color="secondary" size="large">
                                        Завершить алгоритм
                                      </Button>
                                  </Grid>
                                )
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
                                  !(!this.state.needRespiration && currentData.id === 12) && currentData.nextId || currentData.finish ?
                                        <Grid item>
                                            <Link color="primary" size="large" to={currentData.finish ? '/finish' :`/main/${currentData.nextId}`}>
                                                <Button variant="contained" color="primary" size="large">
                                                    Вперед
                                                </Button>
                                            </Link>
                                        </Grid>
                                        : ''
                                }
                            </Grid>
                        </div>
                      {
                        (currentData.id === 12) && (
                          <div className={classes.imgTop}>
                            <img src={bodr} alt="Подбадриваем!" />
                          </div>
                        )
                      }

                    </div>
                </div>
                <Dialog onClose={() => this.setState({openDialog: false})} open={this.state.openDialog}>
                    <DialogTitle>Вы точно планируете завершить алгоритм?</DialogTitle>
                    <div className={classes.dialog}>
                      <Link className={classes.dialogElement} color="primary" size="large" to={`/main/-1`}>
                        <Button variant="contained" color="primary" size="large">
                          Да
                        </Button>
                      </Link>
                      <Button onClick={() => this.setState({openDialog: false})} variant="contained" color="primary" size="large">
                        Нет
                      </Button>
                    </div>
                </Dialog>
            </main>
        );
    }
}

export default withStyles(styles)(Information);
