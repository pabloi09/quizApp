import React from 'react';
import '../App.css';
import Game from './Game'
import { questionAnswer, changeQuestion, submit, initQuestions, startGame} from '../redux/actions'
import ScoreView from './ScoreView'
import Error from "./Error"


export default class Play extends React.Component {
  

  render(){
        return this.props.finished ? 
        <ScoreView score = {this.props.score} questions = {this.props.questions}/>:
        (this.props.questions && this.props.questions.length > 0)?
        <Game
              question = { this.props.questions[this.props.currentQuestion] }
              currentQuestion = { this.props.currentQuestion }
              onQuestionAnswer = { (answer) => {
                  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
              }}
              onNextClicked = { () =>  this.props.dispatch(changeQuestion(this.props.currentQuestion, 1, this.props.questions.length))}
              onPreviousClicked = { () =>  this.props.dispatch(changeQuestion(this.props.currentQuestion, -1, this.props.questions.length))}
              onSubmit = { () => this.props.dispatch(submit(this.props.questions))}
              buttonsState = { this.props.buttonsState }
              resolveQuestion = { (move) =>  this.props.dispatch(changeQuestion(this.props.currentQuestion, move, this.props.questions.length)) }
              numberOfQuestions = {this.props.questions.length} />:
        <Error error = "We can't retrieve the quiz"/>      
  }



componentDidMount(){
  downLoadQuestionsToJson()
  .then(json => this.props.dispatch(initQuestions(json)))
  
  this.props.dispatch(startGame(true))

}


toggleDrawer(){
  this.setState({
    drawerOpened: !this.state.drawerOpened
  })
}

}

const downLoadQuestionsToJson = function() {
  return fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=6bb259eede7bacdc5aab")
         .then(res => res.json())
}
