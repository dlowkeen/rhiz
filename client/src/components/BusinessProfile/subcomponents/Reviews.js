// dependencies
import React, { useState } from 'react';
import commaNumber from 'comma-number';

// components
import { Container, Row, RoundPic, BoldText, SmallText } from '../BusinessProfileStyles';

const Reviews = (props) => {
  const {reviews, reviewCount } = props;
  
  return (
    <div>
      <Row style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '2.5%' }}>
        <div style={{ marginRight: '0.5%', fontSize: '23px', fontWeight: 'bold' }}>{commaNumber(reviewCount)}</div>
        Reviews
      </Row>
      <Container>
        {props.children}
      </Container>
      <Container style={{ marginBottom: '10%' }}>
        <Row style={{flexWrap: 'wrap'}}>
          {reviews.map((review, i) => {
            return <Container style={{ marginRight: '3%', width: '33%', marginBottom: '2%' }} key={i}>
            <Row style={{ marginBottom: '3%' }}>
              <RoundPic src={review.src} style={{ marginRight: '3%' }}/>
              <Container style={{ marginTop: '2%' }}>
                <BoldText>{review.name}</BoldText>
                <SmallText>{review.datePosted}</SmallText>
              </Container>
            </Row>
            <div style={{ fontSize: '17px' }}>{review.review}</div>
          </Container>
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Reviews;