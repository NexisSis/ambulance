import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { getAll } from '../../db/db.js';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
        height: '98vh',
        display: 'flex',
        textAlign: 'center',
    },
    heroContent: {
        maxWidth: 800,
        margin: 'auto',
        textAlign: 'center',
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    }
});

class Logs extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {
                    startTime: 'Нет данных',
                    acceptAddress: 'Нет данных',
                    compressionsType: 'Нет данных',
                    compressionTime: 'Нет данных',
                    finishedTime: 'Нет данных',
                    acceptDelay: 'Задержки нет',
                    TLSRDelay: 'Задержки нет',
                }
            ]
        };
    }

    componentDidMount() {
        getAll(result => {
            console.log('RESULT FROM DB IS', result);
            this.setState({rows: result})
        });
    }

    render () {
        const {classes} = this.props;

        console.log(this.state);
        return (
            <>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Журнал Т-СЛР
                    </Typography>
                    <Link color="primary" size="large" to='/start'>
                        <Button variant="contained" color="primary" size="large">
                            На главную
                        </Button>
                    </Link>
                </div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Дата и Время приема вызова</TableCell>
                                <TableCell align="center">Время подтверждения адреса</TableCell>
                                <TableCell align="center">Время подтверждения остановки сердца/дыхания</TableCell>
                                <TableCell align="center">Тип Т-СЛР</TableCell>
                                <TableCell align="center">Время начала компрессий</TableCell>
                                <TableCell align="center">Время окончания работы алгоритма</TableCell>
                                <TableCell align="center">Причины задержки подтверждения</TableCell>
                                <TableCell align="center">Причины задержки Т-СЛР</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row, index) => (
                                <TableRow key={index}>
                                    {console.log(row)}
                                    <TableCell align="center">{row.startTime}</TableCell>
                                    <TableCell align="center">{row.acceptAddress}</TableCell>
                                    <TableCell align="center">{row.stopHeart}</TableCell>
                                    <TableCell align="center">{row.compressionsType}</TableCell>
                                    <TableCell align="center">{row.compressionTime}</TableCell>
                                    <TableCell align="center">{row.finishedTime}</TableCell>
                                    <TableCell align="center">{row.acceptDelay}</TableCell>
                                    <TableCell align="center">{row.TLSRDelay}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </>
        );
    };
}

export default withStyles(styles)(Logs);
