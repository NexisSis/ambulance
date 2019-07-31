import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

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
    },
    selectMinWidth: {
        minWidth: 300
    }
});


class Finish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelectValue: 'Задержки нет',
            secondSelectValue: 'Задержки нет',
            buttonDisabled: true
        };
    }

    saveData = () => {
        this.props.dbSave(Object.assign({}, {
            finishedTime: new Date().toLocaleString("ru"),
            acceptDelay: this.state.firstSelectValue,
            TLSRDelay: this.state.secondSelectValue,
            number: this.state.number,
        }));
        this.setState({buttonDisabled: false});
    }

  handleChange = (event) => {
    this.setState({number: event.target.value});
  }
    handleChangeFirstSelect = (event) => {
        this.setState({firstSelectValue: event.target.value});
    }

    handleChangeSecondSelect = (event) => {
        this.setState({secondSelectValue: event.target.value});
    }

    render () {
        const { classes } = this.props;
        return (
            <>
                <main>
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Алгоритм завершен
                            </Typography>
                              <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                  <Grid item>
                                    <FormControl>
                                      <TextField
                                        style={{marginTop: 0}}
                                        id="number"
                                        label="№ Вызова"
                                        value={this.state.number}
                                        onChange={this.handleChange}
                                        margin="normal"
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Grid item>
                                    <FormControl >
                                      <InputLabel style={{color:'red'}} shrink htmlFor="label-placeholder">
                                        Причины задержки подтверждения
                                      </InputLabel>
                                      <Select
                                        value={this.state.firstSelectValue}
                                        onChange={this.handleChangeFirstSelect}
                                        input={<Input name="age" id="label-placeholder" />}
                                        name="select"
                                        className={classes.selectMinWidth}
                                      >
                                        <MenuItem value='Задержки нет'>Задержки нет</MenuItem>
                                        <MenuItem value='Отказ свидетеля от выполнения инструкций'>Отказ свидетеля от выполнения инструкций</MenuItem>
                                        <MenuItem value='Эмоциональное состояние свидетеля'>Эмоциональное состояние свидетеля</MenuItem>
                                        <MenuItem value='Свидетель не на месте происшествия'>Свидетель не на месте происшествия</MenuItem>
                                        <MenuItem value='Обрыв связи или плохое качество связи'>Обрыв связи или плохое качество связи</MenuItem>
                                        <MenuItem value='СЛР уже проводится другим свидетелем'>СЛР уже проводится другим свидетелем</MenuItem>
                                        <MenuItem value='Другое'>Другое</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Grid>
                                  <Grid item>
                                    <FormControl >
                                      <InputLabel style={{color:'red'}} shrink htmlFor="label-placeholder">
                                        Причины задержки Т-СЛР
                                      </InputLabel>
                                      <Select
                                        value={this.state.secondSelectValue}
                                        onChange={this.handleChangeSecondSelect}
                                        input={<Input name="age" id="label-placeholder" />}
                                        name="select"
                                        className={classes.selectMinWidth}
                                      >
                                        <MenuItem value='Задержки нет'>Задержки нет</MenuItem>
                                        <MenuItem value='Необходимость Т-СЛР не подтверждена свидетелем'>Необходимость Т-СЛР не подтверждена свидетелем</MenuItem>
                                        <MenuItem value='Отказ свидетеля от проведения СЛР'>Отказ свидетеля от проведения СЛР</MenuItem>
                                        <MenuItem value='Эмоциональное состояние свидетеля'>Эмоциональное состояние свидетеля</MenuItem>
                                        <MenuItem value='Свидетель физически неспособен проводить СЛР'>Свидетель физически неспособен проводить СЛР</MenuItem>
                                        <MenuItem value='Свидетель неспособен изменить положение пострадавшего'>Свидетель неспособен изменить положение пострадавшего</MenuItem>
                                        <MenuItem value='Свидетель не на месте происшествия'>Свидетель не на месте происшествия</MenuItem>
                                        <MenuItem value='Обрыв связи или плохое качество связи'>Обрыв связи или плохое качество связи</MenuItem>
                                        <MenuItem value='Наличие явных признаков необратимой смерти'>Наличие явных признаков необратимой смерти</MenuItem>
                                        <MenuItem value='СЛР уже проводится другим свидетелем'>СЛР уже проводится другим свидетелем</MenuItem>
                                        <MenuItem value='Есть угроза безопасности свидетеля'>Есть угроза безопасности свидетеля</MenuItem>
                                        <MenuItem value='Другое'>Другое</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </Grid>
                                </Grid>
                               </div>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Link color="primary" size="large" to={this.state.buttonDisabled ? '#' : '/'}>
                                            <Button disabled={this.state.buttonDisabled} variant="contained" color="primary" size="large">
                                                Начать сначала
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Button disabled={!this.state.buttonDisabled} onClick={this.saveData} variant="contained" color="secondary"  size="large">
                                            Сохранить данные
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Link color="primary" size="large" to={this.state.buttonDisabled ? '#' : '/logs'}>
                                            <Button disabled={this.state.buttonDisabled} variant="contained" color="primary" size="large">
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

export default withStyles(styles)(Finish);
