import React from 'react'
import { Typography, Paper, Avatar, IconButton} from '@material-ui/core'
import { withStyles} from '@material-ui/core/styles'
import { authorStyles } from './styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TranscriptsIcon from '@material-ui/icons/School'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import pdf from '../assets/transcripts.pdf'



class Author extends React.Component {

    render(){

        const { classes } = this.props


        return(
            <div className = {classes.homeRoot}>
                <Paper className = {classes.paper}>
                    <div className = {classes.header}>
                       
                        <Avatar alt = "Pablo Martín Redondo" src = {require("../assets/author.jpg")} className = {classes.bigAvatar}></Avatar>
                        
                        <div>
                            <Typography variant = "h2">
                            Pablo Martín Redondo
                            </Typography>
                            <Typography variant = "h6">
                            <p>ETSIT-UPM STUDENT | TELECOMMUNICATIONS ENGINEERING</p>
                            <p>MADRID, SPAIN | 20 YEARS OLD</p>
                            </Typography>
                            <IconButton className={classes.button} aria-label="transcripts" color = "inherit"
                                        href ={pdf}
                                        target = "_blank">
                                <TranscriptsIcon />
                            </IconButton>
                            <IconButton className={classes.button} aria-label="linkedin"  color="primary" 
                                        href = "https://www.linkedin.com/in/pablo-mart%C3%ADn-redondo-07b856108/"
                                        target = "_blank">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton className={classes.button} aria-label="mail me" color = "secondary"
                                        href="mailto:pablo.arribas100@gmail.com"
                                        target = "_blank">
                                <MailIcon />
                            </IconButton>
                        </div>
                    </div>
                </Paper>
                {this.getPanels(classes)}
                
            </div> 
        )
    }

    getPanels(classes){
        return titles.map((title, index) => {
            return(
                <ExpansionPanel className = {classes.expPanel}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography className={classes.heading}>{title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>{content[index]}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ) 
        })
    }

    
}

const titles = ["About myself","Education and experience","Programming: languages, environments, frameworks", "Goals", "Awards", "Languages"]
const content = [
    <div>I am creative, hard worker, organized, adaptative to change and I love learning new things.</div>,
    <div>
    
        
        <p><b>HIGH SCHOOL DIPLOMA • 2016 • LUYFERIVAS SCHOOL</b></p>
        I was the best student of my year in technologic high school. University´s access GPA : 12,992/14
         
        
        
        <p><b>BETTS •2016-NOW • ETSIT-UPM</b> </p>
        Student at Bachelor of Engineering in Telecommunication Technologies and Services Engineering.
        Current GPA: 8.92/10 

        
        <p><b>ANDROID  • 2017 • SAMSUNG TECH INSTITUTE-UPM</b></p>
        They were two 100 hours courses, a basic and an advanced one, having obtained the maximum GPA.
        

        
        <p><b>DEEP LEARNING SPECIALIZATION  • SUMMER 2019 • COURSERA</b></p>
        I have taken and completed this specialization given by deeplearning.ai
        

        
        <p><b>INTERNSHIP• OCT(2018)-JUN(2019) • GBT-UPM•ANDROID DEVELOPER</b></p>
        I’ve developed an Android app in the health field for the Biomedical Engineering and Telemedicine Group 
        
    
    </div>,
    <div>
        By order of knowledge, I know:  <b>Java, JavaScript, C, HTML, CSS</b> and a little of <b>Python</b> (applied to Deep Learning Specialization). 
        I have developed Android apps with <b>Android Studio</b> environment. I have worked a lot with <b>MATLAB</b>.  
        I have also worked with <b>Node.js</b> environment, used <b>Express</b> framework and deployed the app in <b>Heroku.</b>  
        Finally, I have played a little with some <b>Google Cloud ‘s APIs</b> and with its Compute Engine.
    </div>,
    <div>
        <b>GROW:</b>
        <li>In a personal level by working in a Meaningful project that will improve millions of people´s life. </li>
        <li>In a professional level by working with extraordinary individuals</li>
    </div>,
    <div>
        <li>Community of  Madrid´s excellence student grant (2016 and 2018)</li>
        <li>High school diploma´s distinction with honors</li>
    </div>,
    <div>
        <li>Spanish • Native language</li>
        <li>English • Hight level </li>

    </div>
    ]
export default withStyles(authorStyles)(Author)