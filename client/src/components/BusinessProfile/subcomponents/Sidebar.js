// dependencies
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


// components
import { Container, Row, Line, Button, InstaPic } from '../BusinessProfileStyles';

const Sidebar = (props) => {
  const { 
    score, instaPics, urgency, changeUrgency, sendRequest, date, getDate, focused, focusCalendar
  } = props;
  
  return (
    <Container style={{ width: '80%' }}>
      <Container style={{ marginBottom: '30%' }}>
        <Row style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '2.25%' }}>Business Rating</Row>
        <Line />
        <Row style={{ fontSize: '23px', marginBottom: '2.25%' }}>
          Rhiz Score<div style={{ fontSize: '11px', marginLeft: '1%', marginTop: '-1%', color: '#999'  }}>?</div> 
          <Row style={{ marginLeft: '5%', fontSize: '23px' }}><div style={{color: '#43b02a', fontSize: '23px' }}>{score}</div>/100</Row>
        </Row>
      </Container>
      <Container>
        <Row style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '2%' }}>Contact Us</Row>
        <Line />
        <Row style={{ fontSize: '14px', color: '#999' }}>Start Date - Optional</Row>
        <DayPickerInput onDayChange={getDate} format='MM-DD-YYYY' placeholder='MM-DD-YYYY' />
        <Row style={{ fontSize: '14px', color: '#999', marginBottom: '1.5%', marginTop: '2.5%' }}>URGENCY</Row>
        <Container style={{ marginBottom: '5%'}}>
          <form>
            <div className='radio' style={{ marginBottom: '1%' }}>
              <label>
                <Row>
                  <input type='radio' value='Just Curious' style={{ marginRight: '1.5%'}}
                                checked={urgency === 'Just Curious'} 
                                onChange={changeUrgency} />
                  <div style={{ marginBottom: '1%', fontSize: '15px' }}>Just Curious</div>
                </Row>
              </label>
            </div>
            <div className='radio' style={{ marginBottom: '1%' }}>
              <label>
                <Row>
                  <input type='radio' value='Ready to Go' style={{ marginRight: '1.5%'}}
                                checked={urgency === 'Ready to Go'} 
                                onChange={changeUrgency} />
                  <div style={{ marginBottom: '1%', fontSize: '15px' }}>Ready to Go</div>
                </Row>
              </label>
            </div>
            <div className='radio' style={{ marginBottom: '1%' }}>
              <label>
                <Row>
                  <input type='radio' value='Emergency' style={{ marginRight: '1.5%'}}
                                checked={urgency === 'Emergency'} 
                                onChange={changeUrgency} />
                  <div style={{ marginBottom: '1%', fontSize: '15px' }}>Emergency</div>
                </Row>
              </label>
            </div>
          </form>
        </Container>
        <Button onClick={sendRequest} style={{ marginBottom: '40%' }}>Connect</Button>
        <Row style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '2.5%' }}>Instagram Feed</Row>
        <Line style={{ marginBottom: '1.5%' }}/>
        <Row style={{ flexWrap: 'wrap', width: '80%' }}>
          {instaPics.map((pic, i) => {return <InstaPic src={pic.pic} key={i} />})}
        </Row>
      </Container>
    </ Container>
  )
};

export default Sidebar;

