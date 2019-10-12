import React from "react"
import { Link }  from "@material-ui/core"

// This resolves to nothing and doesn't affect browser history
const dudUrl = '#';

export default class QuestionsIndex extends React.Component {

    render() {
        let indexes = []
        for (let questionIndex = 0; questionIndex < this.props.numberOfQuestions; questionIndex++) {
            indexes.push(<div key ={questionIndex}><Link onClick = {() => this.props.resolveQuestion(questionIndex - this.props.currentQuestion)} key = {questionIndex} href = {dudUrl} >{questionIndex + 1}</Link>&nbsp;</div>)
        }
        return indexes;
    }

}
