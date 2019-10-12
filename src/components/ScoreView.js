import React from 'react'
import { Typography, Paper, withStyles } from '@material-ui/core'
import { scoreStyles } from './styles'
import bad from '../assets/bad.gif'
import normal from '../assets/normal.gif'
import good from '../assets/good.gif'
import ExpansionPanelList from './ExpansionPanelList'


class ScoreView extends React.Component {

    render(){

        const { classes } = this.props

        return(
            <div className = {classes.scoreRoot}>
                <Paper className = {classes.paper}>
                    <Typography variant = "h1">
                        Your score was {this.props.score}.
                    </Typography>

                    {getPersonalizedMessage(this.props.score,classes)}
                    <Typography >
                        Thank you for playing! Now, you will have the oppotunity to review your answers and compare them with the correct ones. Just expand the pannel corresponing to the question you want to review.
                        To play again, reset the quiz in the up-right corner button.
                    </Typography>
                </Paper>
                < ExpansionPanelList questions = {this.props.questions} />

                
            </div> 
        )
    }
}
const getPersonalizedMessage = function (score,classes) {
    if(score < 5){
            return (
            <div>
                <Typography>You need to improve your skills!</Typography>
                <img src = {bad} className={classes.gif} alt = "bad"/>
            </div>)
    }else if(score < 7){
            return( 
            <div>
                <Typography>You are getting better, keep going!</Typography>
                <img src = {normal} className={classes.gif} alt = "normal"/>
            </div>)
    }else{
        return (
        <div>
            <Typography>Congrats!! You are awesome!!</Typography>
            <img src = {good} className={classes.gif} alt = "good"/>
        </div>)  
    }
}

export default withStyles(scoreStyles)(ScoreView)