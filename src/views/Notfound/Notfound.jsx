import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
        height: '98vh',
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


const Notfound = (props) => {
    const { classes } = props;

    return (
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Страница не найдена
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Вы указали неправильный адрес. Рекомендуем вам перейти на стартовую страницу либо начать сначала.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Link color="primary" size="large" to='/start'>
                                        <Button variant="contained" color="primary" size="large">
                                            Стартовая страница
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link color="primary" size="large" to='/main/1'>
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
        </React.Fragment>
    );
}

export default withStyles(styles)(Notfound);