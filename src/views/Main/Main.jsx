import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Menu from '../../blocks/Menu/Menu';
import Information from '../Information/Information';

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

class Main extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <Menu id={this.props.match.params.id}/>
                <Information id={this.props.match.params.id}
                     dbHandlerStartTime={this.props.dbHandlerStartTime}
                     dbHandlerAddress={this.props.dbHandlerAddress}
                     dbHandlerCompression={this.props.dbHandlerCompression}
                     dbHandlerStopHeart={this.props.dbHandlerStopHeart}
                />
            </div>
        );
    }
};

export default withStyles(styles)(Main);
