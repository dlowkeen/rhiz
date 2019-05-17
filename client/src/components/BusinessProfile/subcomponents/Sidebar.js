import React from 'react';
import Calendar from 'react-datepicker';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


// components
import { Container, Row, Line, Button, InstaPic } from '../BusinessProfileStyles';

const Sidebar = (props) => {
  const { 
    score, instaPics, urgency, changeUrgency, sendRequest, date, getDate, focused, focusCalendar
  } = props;
  console.log('pics: ', instaPics)
  return (
    <Container style={{ width: '80%' }}>
      <Container style={{ marginBottom: '30%' }}>
        <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2.25%' }}>Business Rating</Row>
        <Line />
        <Row style={{ fontSize: '20px', marginBottom: '2.25%' }}>
          Rhiz Score 
          <Row style={{ marginLeft: '5%' }}><div style={{color: '#43b02a'}}>{score}</div>/100</Row>
        </Row>
      </Container>
      <Container>
        <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2%' }}>Contact Us</Row>
        <Line />
        <Row style={{ fontSize: '14px', color: '#999' }}>Start Date - Optional</Row>
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
          id='your_unique_id' // PropTypes.string.isRequired,
        /> */}
        <Row style={{ fontSize: '14px', color: '#999', marginBottom: '1.5%' }}>URGENCY</Row>
        <Container style={{ marginBottom: '5%'}}>
          <form>
            <div className='radio' style={{ marginBottom: '1%' }}>
              <label>
                <Row>
                  <input type='radio' value='Just Curious' style={{ marginRight: '1.5%'}}
                                checked={urgency === 'Just Curious'} 
                                onChange={changeUrgency} />
                  <div style={{ marginBottom: '1%', fontSize: '13px', fontWeight: 'bold' }}>Just Curious</div>
                </Row>
              </label>
            </div>
            <div className='radio' style={{ marginBottom: '1%' }}>
              <label>
                <Row>
                  <input type='radio' value='Ready to Go' style={{ marginRight: '1.5%'}}
                                checked={urgency === 'Ready to Go'} 
                                onChange={changeUrgency} />
                  <div style={{ marginBottom: '1%', fontSize: '13px', fontWeight: 'bold' }}>Ready to Go</div>
                </Row>
              </label>
            </div>
            <div className='radio' style={{ marginBottom: '1%' }}>
              <label>
                <Row>
                  <input type='radio' value='Emergency' style={{ marginRight: '1.5%'}}
                                checked={urgency === 'Emergency'} 
                                onChange={changeUrgency} />
                  <div style={{ marginBottom: '1%', fontSize: '13px', fontWeight: 'bold' }}>Emergency</div>
                </Row>
              </label>
            </div>
          </form>
        </Container>
        <Button onClick={sendRequest} style={{ marginBottom: '40%' }}>Connect</Button>
        <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2.5%' }}>Instagram Feed</Row>
        <Line style={{ marginBottom: '1.5%' }}/>
        <Row style={{ flexWrap: 'wrap', width: '80%' }}>
          {instaPics.map((pic, i) => {return <InstaPic src={pic.pic} key={i} />})}
        </Row>
      </Container>
    </ Container>
  )
};

export default Sidebar;

