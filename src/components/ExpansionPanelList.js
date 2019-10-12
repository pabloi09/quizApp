import React from 'react'
import { withStyles } from '@material-ui/core';
import { scoreStyles } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

class ExpansionPanelList extends React.Component {

    render(){

        const { classes } = this.props

        return this.props.questions.map((question,index) => {
                return (
                    <ExpansionPanel key = {index} className = {classes.expPanel}>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography className={classes.heading}>Question {index + 1} : {question.question}</Typography>
                        </ExpansionPanelSummary>
                        {getAnswerText(question,classes)}
                    </ExpansionPanel>
                )
            });
            
        
    }
}

const getAnswerText = function(question,classes){
    return(
        question.correct ?
        <ExpansionPanelDetails>
              <Typography>Your answer was <mark className = {classes.textGreen}>{ question.userAnswer}</mark>.This answer was correct!</Typography>
        </ExpansionPanelDetails> :
        <ExpansionPanelDetails>
        <Typography>Your answer was <mark className = {classes.textRed}>{ !question.userAnswer? "blank":question.userAnswer}</mark>.This answer was incorrect. The correct answer is&nbsp;  
         <mark className = {classes.textGreen}>{question.answer} </mark> </Typography>
      </ExpansionPanelDetails>
        
    )
}

export default withStyles(scoreStyles)(ExpansionPanelList)