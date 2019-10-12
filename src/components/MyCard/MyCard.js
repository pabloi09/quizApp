import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { gameStyles } from '../styles'
import MyCardHeader from './MyCardHeader'
import MyCardMedia from './MyCardMedia'
import MyFooter from './MyFooter/MyFooter'

class MyCard extends React.Component {

    
    
    render(){
        const { classes } = this.props;
        return (
        <Card className={classes.card}>
          <MyCardHeader question = {this.props.question.question} index = {this.props.currentQuestion}/>
          <MyCardMedia url = { this.props.question.attachment ? this.props.question.attachment.url : "https://blog.hubspot.com/hubfs/google-quiz.jpg"} />
          <MyFooter question = {this.props.question} tips= {this.props.question.tips} authorInfo = { {url:this.props.question.author.photo.url, name: this.props.question.author.username } }/>
        </Card>
        );
    }

    
}

export default withStyles(gameStyles)(MyCard);