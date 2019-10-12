import React from 'react'
import { gameStyles } from '../../styles'
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';

class MyCollapsedBody extends React.Component{

    render(){
        const { classes } = this.props
        return(
            <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
                <CardHeader
                avatar={
                    <Avatar aria-label="author photo" className={classes.bigAvatar} srcSet = {this.props.authorPhoto} />
                }
                title = "Question added by"
                subheader={this.props.authorName}/>
            </Collapse>
        );
    }
}

export default withStyles(gameStyles)(MyCollapsedBody)