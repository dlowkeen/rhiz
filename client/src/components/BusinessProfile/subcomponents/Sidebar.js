import React, { useState } from 'react';

// components
import { Container, Row } from '../BusinessProfileStyles';

const Sidebar = (props) => {
  const { score, instaPics, urgency, changeUrgency, sendRequest } = props;
  return (
    <Container>
      <Row>Business Rating</Row>
      <Row>Rhiz Score <div style={{color: '#43b02a'}}>{score}</div>/100</Row>
    </ Container>
  )
};

export default Sidebar;

