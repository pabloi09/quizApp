import React from "react"
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton} from "@material-ui/core"
import { withStyles, withTheme } from "@material-ui/core/styles"
import HomeIcon from "@material-ui/icons/Home"
import PlayIcon from "@material-ui/icons/GamepadRounded"
import AuthorIcon from "@material-ui/icons/Person"
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { drawerStyles } from './styles'

import {
    Link,
    withRouter
  } from "react-router-dom"

const icons = [<HomeIcon/>, <PlayIcon/>,<AuthorIcon/>]

const links = ["/", "/game/","/author/"]

class MyDrawer extends React.Component{
    
    constructor(props){
        super(props);
        this.toggleIfNecessary = this.toggleIfNecessary.bind(this)
    }

    render(){
        const {classes, theme} = this.props;
        return(
            <Drawer open={this.props.open} onClose={this.props.toggleDrawer}
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: this.props.open,
                [classes.drawerClose]: !this.props.open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: this.props.open,
                    [classes.drawerClose]: !this.props.open,
                }),
            }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={this.props.toggleDrawer}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {this.sideList()}
            </Drawer>
        )
    }


    sideList(){
        return(
        <div
          onClick={this.toggleIfNecessary}
          onKeyDown={this.props.toggleDrawer}>
          <List>
            {['Home', 'Play', 'About the author'].map((text, index) => (
                <ListItem button key={text} component={Link} to={links[index]}>
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
          </List>
        </div>
      );
    }

    toggleIfNecessary(){
        if(this.props.open){
            this.props.toggleDrawer();
        }
    }
}

export default withRouter(withStyles(drawerStyles)(withTheme(MyDrawer)))


