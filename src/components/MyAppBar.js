import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles';
import { appBarStyles } from './styles';
import ReloadIcon from '@material-ui/icons/Autorenew'
import clsx from 'clsx'



  
class MyAppBar extends React.Component{

    constructor(props){
      super(props);
      this.onReset = this.onReset.bind(this)
      this.state = {
        rotating: false
      }
    }

    render(){

      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: this.props.open,
          })}>
            <Toolbar>
              <IconButton edge="start" className={clsx(classes.menuButton, {
                                                  [classes.hide]: this.props.open,
                                                  })}
                          color="inherit" aria-label="open drawer" onClick = {this.props.toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Quiz App
              </Typography>
              <Typography variant="h6" >
                {this.props.finished || !this.props.started ? "":this.props.seconds}
              </Typography>
              <IconButton color="inherit" 
                          onClick = {this.onReset}
                          className={clsx(classes.static, {
                            [classes.rotate]: this.state.rotating,
                            [classes.hide]: !this.props.started
                            })} > <ReloadIcon/> </IconButton>
            </Toolbar>
            
          </AppBar>
        </div>
      );
    }

    onReset(){
      this.props.reset();
      this.setState({
        rotating : true
      })
      setTimeout(()=>{
        this.setState({
          rotating : false
        })
      },400)
    }

}

export default withStyles(appBarStyles)(MyAppBar)