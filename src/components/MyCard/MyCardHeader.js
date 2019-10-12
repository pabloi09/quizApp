import React from 'react';
import { gameStyles } from '../styles'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

class MyCardHeader extends React.Component {
    render(){
        const { classes } = this.props;

        return (
            <CardHeader
              avatar={
                <Avatar aria-label="number" className={classes.avatar}>
                  {this.props.index + 1}
                </Avatar>
              }
              title={this.props.question}
              titleTypographyProps={{variant:'h5' }}/>
        );
    }
}

export default withStyles(gameStyles)(MyCardHeader);