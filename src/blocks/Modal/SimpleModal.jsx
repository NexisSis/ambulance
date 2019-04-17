import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import CallMade from '@material-ui/icons/CallMade';
// import List  from '@material-ui/core/List';
// import ListItem from '@material-ui/core/List';
// import ListItemText from '@material-ui/core/List';
// import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    },
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
                    </div>
                </Modal>
            </div>
        );
    }
}


export default withStyles(styles)(SimpleModal);
