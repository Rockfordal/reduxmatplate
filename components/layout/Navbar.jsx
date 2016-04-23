import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/lib/flat-button';

const MyNavbar = (props) => (
  <div>
  <AppBar
    muiTheme="default"
    prepareStyles="apa"
    title="React Redux Material"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <div>
      <FlatButton label="Hem"
                  primary={props.location.pathname==='/'}
                  linkButton={true} href="#/" />
      <FlatButton label="Bilar"
                  primary={props.location.pathname==='/cars'}
                  linkButton={true} href="#/cars" />
      <IconMenu
        iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
        <MenuItem value="1" primaryText="Bilar" link />
        <MenuItem value="2" primaryText="Garage" />
        <MenuItem value="3" primaryText="Logga ut" />
      </IconMenu>
      </div>
    } />
 {props.children}
  </div>
);

export default MyNavbar
