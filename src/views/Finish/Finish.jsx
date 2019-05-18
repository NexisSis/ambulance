import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
        display: 'flex'
    },
    heroContent: {
        maxWidth: 800,
        margin: 'auto',
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    }
});


class Finish extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log({finishedTime: new Date()});
        this.props.dbSaveWithFinishedTime({finishedTime: new Date().toLocaleString("ru")});

    }
    render () {

        const { classes } = this.props;
        return (
            <>
                <main>
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Вы справились! Поздравляю!
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Вы можете начать сначала, либо пойти домой и попить чай, ибо вы и так уже много сделали. Тоже просто текст.
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Link color="primary" size="large" to='/'>
                                            <Button variant="contained" color="primary" size="large">
                                                Начать сначала
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default withStyles(styles)(Finish);
