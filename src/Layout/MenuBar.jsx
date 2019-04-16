import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Navbar.css";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: "-10%"
  },
  tit: {
    textDecoration: "none"
  },
  center: {
    marginLeft: "25%"
  }
};

class MenuBar extends React.Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.center}>
        <div className="dropdown">
          <button className="dropbtn">Tipovi fotoaparata</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Tips'n'tricks</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Oprema</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    );
  }
}
MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MenuBar);

/*import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
 
import PopupState, {
  bindTrigger,
  bindMenu
} from "material-ui-popup-state/index";
import "./Navbar.css";
const styles  = theme => ( {
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: "#484848",
    height: 20
  },
  right: {
    right: -350,
    fontSize: 15,
    backgroundColor: "transparent",
    alignItems: "center",
    height: 50,
    color: "white", 
    borderStyle: "solid", 
    boxShadow: "none !important",
    fontFamily: "sans-serif",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5, 
      
  },
  
})

function MenuBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography />
        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                className={classes.right}
             
              >
                Tipovi fotoaparata
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>DSLR</MenuItem>
                <MenuItem onClick={popupState.close}>Kompaktni</MenuItem>
                <MenuItem onClick={popupState.close}>Analogni</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                className={classes.right}
              >
                Marke fotoaparata
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Canon</MenuItem>
                <MenuItem onClick={popupState.close}>Nikon</MenuItem>
                <MenuItem onClick={popupState.close}>Sony</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                className={classes.right}
              >
                Tips'n'Tricks
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Sve</MenuItem>
                <MenuItem onClick={popupState.close}>Kamera trikovi</MenuItem>
                <MenuItem onClick={popupState.close}>Video trikovi</MenuItem>
                <MenuItem onClick={popupState.close}>Editiranje</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                className={classes.right}
              >
                Oprema
              </Button>
            </React.Fragment>
          )}
        </PopupState>
      </Toolbar>
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
/* <React.Fragment>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              className={classes.right}
            >
              Marke fotoaparata
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Canon</MenuItem>
              <MenuItem onClick={popupState.close}>Nikon</MenuItem>
              <MenuItem onClick={popupState.close}>Sony</MenuItem>
            </Menu>
          </React.Fragment>
          <React.Fragment>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              className={classes.right}
            >
              Tips'n'Tricks
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Sve</MenuItem>
              <MenuItem onClick={popupState.close}>Kamera trikovi</MenuItem>
              <MenuItem onClick={popupState.close}>Video trikovi</MenuItem>
              <MenuItem onClick={popupState.close}>Editiranje</MenuItem>
            </Menu>
          </React.Fragment>
          <React.Fragment>
            <Button
              variant="contained"
              {...bindTrigger(popupState)}
              className={classes.right}
            >
              Oprema
            </Button>
          </React.Fragment> */
