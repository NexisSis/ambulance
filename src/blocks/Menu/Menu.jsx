import React from 'react';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import data from "../../data/data";
import Metronom from "../Metronom/Metronom";
import Stopwatch from "../Stopwatch/Stopwatch";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    center: {
        display: 'flex',
        alignItems: 'center'
    },
    headerContainer: {
        display: 'flex',
        width: '250px',
        justifyContent: 'space-between',
        marginLeft: '15px',
    },
    tollbarHeight: {
        minHeight: '85px'
    }
});

class Menu extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.tollbarHeight}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Метроном
                        </Typography>
                        <Metronom/>
                        <Stopwatch/>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >

                    <Link className={`${classes.toolbar} ${classes.center} ${classes.tollbarHeight}`}
                          color="primary" size="large" to='/'>
                        <ListItem button>
                            <ListItemText primary={'Сначала'}/>
                        </ListItem>
                    </Link>

                    <Divider/>
                    <List>
                        {data.map((text, index) => {
                            if (text.id >= 1000) return;
                            return (
                            <Link color="primary" key={index} size="large" to={`/main/${text.id}`}>
                                    <ListItem selected={text.id === +this.props.id} button>
                                        <ListItemText primary={<Typography  dangerouslySetInnerHTML={{__html: text.title}} />} />
                                    </ListItem>

                            </Link>
                            );
                        })}
                        <Link color="primary" size="large" to={`/main/-1`}>
                            <ListItem button>
                                <ListItemText primary={'Конец'}/>
                            </ListItem>
                        </Link>
                    </List>
                    <Divider/>
                </Drawer>
            </>
        );
    }
}

export default withStyles(styles)(Menu);
