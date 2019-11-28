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
  constructor(props){
    super(props);
    this.state = {
      prevPath: '',
    };
  }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
          this.setState({prevPath: this.props.location.pathname})
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <Menu id={this.props.match.params.id}/>
                <Information
                     id={this.props.match.params.id}
                     dbHandlerStartTime={this.props.dbHandlerStartTime}
                     dbHandlerAddress={this.props.dbHandlerAddress}
                     dbHandlerCompression={this.props.dbHandlerCompression}
                     dbHandlerStopHeart={this.props.dbHandlerStopHeart}
                     prevPath={this.state.prevPath}
                />
            </div>
        );
    }
};

export default withStyles(styles)(Main);
