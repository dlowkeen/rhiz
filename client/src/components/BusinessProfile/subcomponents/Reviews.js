// dependencies
import React, { useState } from 'react';
import commaNumber from 'comma-number';

// components
import { Container, Row, RoundPic, BoldText, SmallText } from '../BusinessProfileStyles';
import { Z_ASCII } from 'zlib';

const Reviews = (props) => {
  const {reviews, reviewCount } = props;
  console.log('reviews: ', reviews)
  return (
    <div>
      <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2.5%' }}>
        <div style={{ marginRight: '0.5%' }}>{commaNumber(reviewCount)}</div>
        Reviews
      </Row>
      <Container style={{ marginBottom: '10%' }}>
        <Row style={{flexWrap: 'wrap'}}>
          {reviews.map((review, i) => {
            return <Container style={{ marginRight: '3%', width: '33%' }} key={i}>
            <Row style={{ marginBottom: '3%' }}>
              <RoundPic src={review.src} style={{ marginRight: '3%' }}/>
              <Container style={{ marginTop: '2%' }}>
                <BoldText>{review.name}</BoldText>
                <SmallText>{review.datePosted}</SmallText>
              </Container>
            </Row>
            <div style={{ fontSize: '13px' }}>{review.review}</div>
          </Container>
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Reviews;