import React from 'react'
import { Typography, Paper, withStyles } from '@material-ui/core'
import { homeStyles } from './styles'
import quiz from '../assets/quiz.gif'


class Home extends React.Component {

    render(){

        const { classes } = this.props


        return(
            <div className = {classes.homeRoot}>
                <Paper className = {classes.paper}>
                    <Typography variant = "h1">
                        Welcome to Quiz App!
                    </Typography>
                    <img src = {quiz} className={classes.gif} alt = "quiz"/>
                    <Typography>
                    This web will challenge you. You will be ask to answer 10 questions in 5 minutes. Then, you will be given the solutions.
                    </Typography>    
                    <Typography>
                        <li>Navigate throught the menus with the left pannel.</li>
                        <li>While playing, do not submit the answers until you have finished.</li> 
                        <li>The answers are saved automatically and will be submited if you run out of time. </li>
                        <li>Reset the game with the up-right corner button. </li>
                        Have fun! 
                    </Typography>
                </Paper>
            </div> 
        )
    }
}

export default withStyles(homeStyles)(Home)