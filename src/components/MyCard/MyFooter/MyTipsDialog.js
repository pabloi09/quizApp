import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { gameStyles } from '../../styles'
import { withStyles } from '@material-ui/core/styles';


class MyTipsDialog extends React.Component {

    render(){
        const {classes} = this.props;
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClick}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Tips"}</DialogTitle>
            <DialogContent className = {classes.dialog}>
              <DialogContentText id="alert-dialog-description">
                {this.props.tips.length === 0 ? "There are no tips yet" : this.props.tips.map((tip, index) => <li key = {index}>{tip}</li>)}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClick} color="primary" autoFocus>
                Thanks
              </Button>
            </DialogActions>
          </Dialog>
        );
    }
   
}

export default withStyles(gameStyles)(MyTipsDialog)