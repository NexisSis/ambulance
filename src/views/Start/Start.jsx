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


class Start extends React.Component {
    constructor(props){
        super(props);

    }
    render () {
        const {classes} = this.props;
        return (
            <>
                <main>
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Вас приветствует ассистент для
                                диспетчерского сопровождения СЛР!
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Только для квалифицированных специалистов! <br/>
                                Авторские права: © Биркун А. А., Уманский Н. Ю., Косова Е. А.
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Link color="primary" size="large" to='/main/1'>
                                            <Button variant="contained" color="primary" size="large" onClick={() => {
                                                console.log({startTime: new Date()});
                                                this.props.dbHandlerStartTime({startTime: new Date().toLocaleString("ru")})
                                            }}>
                                                Начать
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link color="primary" size="large" to='/logs'>
                                            <Button variant="contained" color="primary" size="large">
                                                ЖУРНАЛ
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

export default withStyles(styles)(Start);
