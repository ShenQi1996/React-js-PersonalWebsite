import React from 'react';
import styled from 'styled-components';
import "./section4.component.css";
import Wrapper from '../wrapper/wrapper.component';

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Section4Styled = styled.div``;


document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, googleCalendarPlugin],
    googleCalendarApiKey: "AIzaSyCGSpYwEGk3mBxGfrTteoEksiMtLExcA1s",
    events: {
      googleCalendarId: "qisamsam@gmail.com",
    },

  });

  calendar.render();
});


export default function Section4() {
  return (
    <Section4Styled id="section4">
      <Wrapper>
        <div className="cal">
         <h1>Calendar</h1>
         <div id="calendar"></div>
        </div>
      </Wrapper>
    </Section4Styled>
  );
}
