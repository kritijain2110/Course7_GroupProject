import React, {Component} from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appHeader:{
    backgroundColor:'#263238'
  }
})

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render(){
    const {classes,screen} = this.props;
    return (<div>
        <AppBar className={classes.appHeader}>
          <Toolbar>
            {(screen === "Login" || screen === "Home") && <span className="header-logo">Image Viewer</span>}
          </Toolbar>
        </AppBar>
    </div>)
  }
}

export default withStyles(styles)(Header)
