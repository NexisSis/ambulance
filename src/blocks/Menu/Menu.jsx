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
});

const links = [
    'Какой адрес?',
    'Кому нужна помощь?',
    'Сколько лет?',
    'В сознании?',
    'Впорядке?',
    'Нормально дышит?',
    'Машина выехала!',
    'Уложите его на спину',
    'Встаньте рядом',
    '11. Исправить',
    '12. Исправить',
    '13. Что писать?',
    '14. Вдох воздуха',
    '15. ???',
    '16???'
];

const Menu = (props) => {
    const { classes } = props;

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Сердечно легочная реанимация
                    </Typography>
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
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {links.map((text, index) => (
                        <Link color="primary"  key={index} size="large" to={`/main/${index + 1}`}>
                            <ListItem button>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <Link color="primary" size="large" to='/'>
                    <ListItem button>
                        <ListItemText primary={'Сначала'} />
                    </ListItem>
                </Link>
            </Drawer>
        </>
    );
}

export default withStyles(styles)(Menu);