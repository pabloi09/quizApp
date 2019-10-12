import React from 'react';
import MyCard from './MyCard/MyCard'
import { IconButton } from '@material-ui/core';
import { NavigateBefore, NavigateNext, Done } from '@material-ui/icons'; 
import { gameStyles }  from './styles'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ConfirmSubmitDialog from './ConfirmSubmitDialog';
import QuestionsIndex from './QuestionsIndex';


class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dialogOpened: false
        }
        this.changeDialogState = this.changeDialogState.bind(this)
        this.submit = this.submit.bind(this)
    }

    render(){
        const { classes } = this.props
        return (
            <div className = {classes.game}>
                <div className = {classes.content}>
                    <IconButton  disabled = {!this.props.buttonsState[0]} onClick = {this.props.onPreviousClicked}> <NavigateBefore/> </IconButton>
                    <MyCard question = {this.props.question} currentQuestion = {this.props.currentQuestion}/>
                    <IconButton disabled = {!this.props.buttonsState[1]} onClick = {this.props.onNextClicked}> <NavigateNext/> </IconButton>
                </div>
                <div className = {classes.answer}>
                    <TextField label="Answer" className={ classes.textField } margin="normal" variant="outlined" value = { this.props.question? this.props.question.userAnswer || "":"" }
                    onChange = { (e) => this.props.onQuestionAnswer(e.target.value) }/>
                    <Fab variant="extended" aria-label="submit" color = "primary" className={classes.fab} onClick = {this.changeDialogState}><Done className={classes.extendedIcon} />Submit </Fab>
                    <ConfirmSubmitDialog open = {this.state.dialogOpened} cancelSubmit = {this.changeDialogState} submit = {this.submit} />
                </div>
                <div className = {classes.questionsIndex}>
                <QuestionsIndex numberOfQuestions = {this.props.numberOfQuestions } resolveQuestion = {(move) => this.props.resolveQuestion(move)} currentQuestion = {this.props.currentQuestion} />  
                </div>              
            </div>
          );

    }

    changeDialogState(){
        this.setState({
            dialogOpened : !this.state.dialogOpened
        })
        
    }

    submit(){
        this.changeDialogState();
        this.props.onSubmit();
    }

    


    
    

    
}

export default withStyles(gameStyles)(Game)

