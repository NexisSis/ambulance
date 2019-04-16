import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import CallMade from '@material-ui/icons/CallMade';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
});

class SimpleModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Fab color="primary" onClick={this.handleOpen} aria-label="Call" className={classes.fab}>
                    <CallMade />
                </Fab>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            Возможные трудности в процессе Т-СЛР и их преодоление:
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетелю <b>мешает телефон</b>, следует предложить включить громкую связь или на время проведения СЛР положить телефон на пол;
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетель <b>боится юридических последствий</b>, необходимо убедить его, что закон на его стороне (действие в условиях «крайней необходимости»);
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетель <b>впадает в панику</b>, нужно проявлять настойчивость и продолжать инструктировать свидетеля спокойным и уверенным тоном, чтобы настроить его на выполнение задачи;
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетель <b>устает</b>, необходимо напомнить о необходимости держать руки прямыми (не сгибать в локтях);
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетель полностью <b>исчерпал силы</b>, нужно предложить, чтобы кто-нибудь заменил его;
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетель <b>боится контактировать</b> с пострадавшим для проведения искусственного дыхания, необходимо перейти к алгоритму «только компрессии»;
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Если свидетель сообщил, что у пострадавшего <b>произошла «рвота»</b>, необходимо дать инструкции повернуть голову пострадавшего на бок и очистить рот.
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;