import React from 'react';
import '../App.css';
import { connect } from 'react-redux'

import MyAppBar from './MyAppBar';
import MyDrawer from "./MyDrawer"
import Home from "./Home"
import Author from "./Author"
import Play from "./Play"
import Error from "./Error"


import { resetQuiz, secondPassed, startGame} from '../redux/actions'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"




class App extends React.Component {
  

  constructor(props){
    super(props);

    this.state = {
      drawerOpened: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.resetQuestions = this.resetQuestions.bind(this)
    this.finishGame = this.finishGame.bind(this)
  }

  render(){
    
    return (
      <div className = "App">
            <MyAppBar reset = {this.resetQuestions} seconds = {this.props.seconds} finished = {this.props.finished} started = {this.props.started} toggleDrawer = {this.toggleDrawer} open={this.state.drawerOpened}/>
              <Router>
                <MyDrawer open={this.state.drawerOpened} toggleDrawer = {this.toggleDrawer}/>
                <Switch>
                  <Route path = "/" exact render = {() =>{ 
                    this.finishGame();
                    return <Home/>
                  }}/>
                  <Route path="/game/" 
                        render={ () => <Play {...this.props}/> } />
                  <Route path="/author/" render={() => {
                    this.finishGame();
                    return <Author/>
                    }} />
                    <Route render={() => {
                    this.finishGame();
                    return <Error error = "The page you are trying to access does not exist"/>
                    }} />
                  </Switch>
              </Router>
      </div>
      
    );
  }

  finishGame(){
    this.props.dispatch(startGame(false));
  }

  componentDidMount(){
    setInterval(()=>this.props.dispatch(secondPassed(this.props.seconds, this.props.questions, this.props.started)),1000);
  }



toggleDrawer(){
  this.setState({
    drawerOpened: !this.state.drawerOpened
  })
}

resetQuestions(){
  downLoadQuestionsToJson()
  .then(json => this.props.dispatch(resetQuiz(json)))
}


}

const mapStateToProps = function(state){
  return {
    ...state
  };
}

const downLoadQuestionsToJson = function() {
  return fetch("https://quiz.dit.upm.es/api/quizzes/random10wa?token=6bb259eede7bacdc5aab")
         .then(res => res.json())
}




export default connect(mapStateToProps)(App);
