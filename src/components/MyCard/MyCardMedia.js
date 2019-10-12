import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { gameStyles } from '../styles'
import { withStyles } from '@material-ui/core/styles';


class MyCardMedia extends React.Component {

    render(){
        const { classes } = this.props
        return(
            <CardMedia
          
          image= {this.props.url}
          title="Tip image"
          className = {classes.media}
        />
        );
    }
}

export default withStyles(gameStyles)(MyCardMedia);