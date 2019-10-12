import React from 'react'
import { gameStyles } from '../../styles'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import MyTipsDialog from './MyTipsDialog'


class MyCardActions extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        const { classes } = this.props;
        return(
            <CardActions disableSpacing>
                    <IconButton aria-label="show tips" onClick = {this.handleClick}>
                        <HelpIcon  />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: this.props.expanded,
                        })}
                        onClick={this.props.expandClick}
                        aria-expanded={this.props.expanded}
                        aria-label="about the author">
                        <ExpandMoreIcon />
                    </IconButton>
                    <MyTipsDialog open = {this.state.open} handleClick = {this.handleClick} tips = {this.props.tips}  />
                    
            </CardActions>
        );
    }
    handleClick(){
        this.setState({open: !this.state.open})
    }

}

export default withStyles(gameStyles)(MyCardActions)