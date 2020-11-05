import React from 'react';
import styled from 'styled-components';
import "./section4.component.css";
import Wrapper from '../wrapper/wrapper.component';

import { Calendar } from "@fullcalendar/core";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from '@fullcalendar/list';

/**MUi */
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/**MUi */

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));



const Section4Styled = styled.div``;


document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    plugins: [listPlugin, googleCalendarPlugin],
    initialView: 'listWeek',
    googleCalendarApiKey: "AIzaSyCGSpYwEGk3mBxGfrTteoEksiMtLExcA1s",
    events: {
      googleCalendarId: "qisamsam@gmail.com",
    },
    eventClick: function (info) {
      info.jsEvent.preventDefault();
    },
    height: 500,
  });
  
  calendar.render();
});


export default function Section4() {
  const classes = useStyles();
  return (
    <Section4Styled id="section4">
      <Wrapper>
        <div  className="Box">
          <h1>EXPERIENCES</h1>
          <div className="timeline">
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2">
                    July 2019- March 2020
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                      {/**ICON */}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" elevation={3} className={classes.paper}>
                    <Typography variant="h8" component="h2">
                      Personal Trainer
                    </Typography>
                    <Typography>
                        <ul className="listText">
                          <li>Demonstrating exercise and routines to clients</li>
                          <li>Monitoring client progress</li>
                          <li>Modify exercises according to clients fitness levels</li>
                          <li>Providing emergency first aid if necessary </li>
                        </ul>
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2">
                    May 2017 – May 2019
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                  {/**ICON */}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000" elevation={3} className={classes.paper}>
                    <Typography variant="h8" component="h2">
                       Web Developer/ Product Data Coordinator 
                    </Typography>
                    <Typography>
                      <ul  className="listText2">
                        <li>Develop data tracking and monitoring systems with SQL server</li>
                        <li>Establish data entry criteria and standards</li>
                        <li>Analyze data to identify trends and project program outcomes using Google Analytics</li>
                        <li>Worked with the Management team to develop and launch a new/ updated internal website</li>
                        <li>Completed daily, weekly, monthly, period and annual reports for corporate</li>
                        <li>Provide IT services for all new development with my programming skills</li>
                      </ul>
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2">
                    June 2016 – May 2017  
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                      {/**ICON */}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" elevation={3} className={classes.paper}>
                    <Typography variant="h8" component="h2">
                      Full Stack Developer 
                    </Typography>
                    <Typography>
                      <ul  className="listText">
                          <li>Communicate with management or development team to prioritize needs, develop content criteria, or choose solutions bases on the data from Google Analytics</li>
                          <li>Design, build, update, or maintain website interface, using HTML, JavaScrip, CSS and PHP</li>
                          <li>Planned site/project design by clarifying goals with Trello</li>
                          <li>Evaluate code to ensure that it is valid, is properly structured, and is compatible with browsers and devices</li>
                          <li>Comprehended web reports to assess analytical behaviors from a usability standpoint</li>
                        </ul>
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="cal">
            <h2>Schedule</h2>
            <div id="calendar"></div>
            </div>
        </div>
      </Wrapper>
    </Section4Styled>
  );
}
