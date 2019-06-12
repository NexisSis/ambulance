import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const styles = theme => ({
    metronomContainer: {
        display: 'flex',
        width: '250px',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

class Metronom extends React.Component {
    constructor (props) {
        super(props);

        this.metronom = {
            100: new Audio('./audio/100.wav'),
            110: new Audio('./audio/110.wav'),
            120: new Audio('./audio/120.wav'),
        };

        this.metronom["100"].loop = true;
        this.metronom["110"].loop = true;
        this.metronom["120"].loop = true;
    }

    setMetronomAudio(mCount) {
        if (this.playedMetronom) {
            this.metronom["100"].pause();
            this.metronom["110"].pause();
            this.metronom["120"].pause();
        }

        if (this.playedMetronom === mCount && this.canPlayMetronom) {
            this.metronom[mCount].pause();
            this.canPlayMetronom = false;
        } else {
            this.metronom[mCount].play();
            this.playedMetronom = mCount;
            this.canPlayMetronom = true;
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.metronomContainer}>
                    <Button onClick={() => this.setMetronomAudio(100)} variant="contained" color="secondary" size="large">
                        100
                    </Button>
                    <Button onClick={() => this.setMetronomAudio(110)} variant="contained" color="secondary" size="large">
                        110
                    </Button>
                    <Button onClick={() => this.setMetronomAudio(120)} variant="contained" color="secondary" size="large">
                        120
                    </Button>
                </div>

            </>
        );
    }
}

export default withStyles(styles)(Metronom);
