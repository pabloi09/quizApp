import React from 'react'
import { Typography, Paper, withStyles } from '@material-ui/core'
import { errorStyles } from './styles'
import error from '../assets/error.gif'


class Error extends React.Component {

    render(){

        const { classes } = this.props


        return(
            <div className = {classes.homeRoot}>
                <Paper className = {classes.paper}>
                    <Typography variant = "h1">
                       Error:
                    </Typography>
                    <Typography >
                       {this.props.error}
                    </Typography>
                    <img src = {error} className={classes.gif} alt = "error"/>
                    <Typography>
                        We are sorry. Try again later, if the error persist you can&nbsp;  
                        <a href = "mailto:pablo.arribas100@gmail.com" target = "_blank" rel="noopener noreferrer" >contact us</a>. 
                        You can also <a href ="/"> go back to the home page</a>.
                    </Typography>
                </Paper>
            </div> 
        )
    }
}

export default withStyles(errorStyles)(Error)