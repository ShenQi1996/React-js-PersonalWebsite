import React from 'react';
import styled from 'styled-components';
import "./section4.component.css";
import Wrapper from '../wrapper/wrapper.component';

import { Calendar } from "@fullcalendar/core";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from '@fullcalendar/list';
import Contact from "../contact/Contact.js";

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
  return (
    <Section4Styled id="section4">
      <Wrapper>
        <div className="twoBox">
          <div className="cal">
            <h2>Schedule</h2>
            <div id="calendar"></div>
          </div>
          <div className="context1">
            <Contact/>
          </div>
        </div>
      </Wrapper>
    </Section4Styled>
  );
}
