import React, { useState } from 'react';
import DatePicker from "react-datepicker";

// components
import { Container, Row } from '../BusinessProfileStyles';

const Sidebar = (props) => {
  const { score, instaPics, urgency, changeUrgency, sendRequest } = props;
  return (
    <Container>
      <Container>
        <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>Business Rating</Row>
        <Row style={{ fontSize: '16px' }}>Rhiz Score <div style={{color: '#43b02a'}}>{score}</div>/100</Row>
      </Container>
      <Container>
        <Row style={{ fontSize: '16px', fontWeight: 'bold' }}>Contact Us</Row>
        <Row style={{ fontSize: '12px', color: '#999' }}>Start Date - Optional</Row>
        <DatePicker
          selected={props.date}
          onChange={props.getDate}
        />
      </Container>
    </ Container>
  )
};

export default Sidebar;

