import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import SettingsIcon from 'material-ui-icons/Settings';
import HelpIcon from 'material-ui-icons/Help';
import NotificationsIcon from 'material-ui-icons/Notifications';
import LocalTaxiIcon from 'material-ui-icons/LocalTaxi';

const NavDrawer = (props) => {

    let {navDrawerOpen} = props;

    return (
        <Drawer
            open={navDrawerOpen}
            docked={true}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LocalTaxiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notifications"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help"/>
                </ListItem>
            </List>
        </Drawer>
    )
};

NavDrawer.propTypes = {
    navDrawerOpen: PropTypes.bool
};

export default NavDrawer