import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { gameStyles } from './styles'
import { withStyles } from '@material-ui/core/styles';


class ConfirmSubmitDialog extends React.Component {

    render(){
        const {classes} = this.props;
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.cancelSubmit}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to submit your quiz?"}</DialogTitle>
            <DialogContent className = {classes.dialog}>
              <DialogContentText id="alert-dialog-description">
                Once you have submitted it, you will not be able to aply any changes
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.props.cancelSubmit} color="primary" autoFocus>
                no
              </Button>
              <Button onClick={this.props.submit} color="primary" >
                yes
              </Button>
            </DialogActions>
          </Dialog>
        );
    }
   
}

export default withStyles(gameStyles)(ConfirmSubmitDialog)