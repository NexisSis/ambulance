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


function Start(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Вас приветствует асистент для сердечно-лёгочной реанимации.
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                           Тут надо тоже что-то написать, например какое-то краткое описание для чего это нужно, как вариант можно что-то про
                            безопасность, что-то типо, если вы не уверенны, то не стоит. Но вообще этот текст для демонстрации.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Link color="primary" size="large" to='/main'>
                                        <Button variant="contained" color="primary" size="large">
                                          Начать
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

export default withStyles(styles)(Start);