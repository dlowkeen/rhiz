import React, { useState } from 'react';
import Calendar from "react-datepicker";
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

// components
import { Container, Row } from '../BusinessProfileStyles';

const Sidebar = (props) => {
  const { 
    score, instaPics, urgency, changeUrgency, sendRequest, date, getDate, focused, focusCalendar 
  } = props;
  return (
    <Container>
      <Container>
        <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>Business Rating</Row>
        <Row style={{ fontSize: '16px' }}>Rhiz Score <div style={{color: '#43b02a'}}>{score}</div>/100</Row>
      </Container>
      <Container>
        <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>Contact Us</Row>
        <Row style={{ fontSize: '12px', color: '#999' }}>Start Date - Optional</Row>
        {/* <Calendar
          selected={props.date}
          onChange={props.getDate}
          format='MM/DD/YYYY'
          dropdownMode='select'
        >
        </Calendar> */}
        {/* <SingleDatePicker
          date={date} // momentPropTypes.momentObj or null
          onDateChange={({date}) => getDate({date})} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={focusCalendar} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        /> */}
      </Container>
    </ Container>
  )
};

export default Sidebar;

