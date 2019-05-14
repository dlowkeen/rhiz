// packages
import React, { useState, useEffect } from 'react';
import { connect  } from 'react-redux';

// components
import Sidebar from './subcomponents/Sidebar';
// import Reviews from './subcomponents/Reviews';
// import BusinessMapContainer from './subcomponents/BusinessMapContainer'
import { Container, Row, Dollar } from './BusinessProfileStyles/index';
// import ParallaxImage from '../common/ParallaxImage';

// assets
import { business, reviews, worksWith, instaPics } from './BusinessInfo';


const BusinessProfile = () => {
  //state
  const [review1, readMore1] = useState(false);
  const [review2, readMore2] = useState(false);
  const [review3, readMore3] = useState(false);
  const [review4, readMore4] = useState(false);
  const [urgency, setUrgency] = useState('Just Curious');
  const [mutualFriends, setMutual] = useState(7);
  const [totalFriends, setTotal] = useState(1856);
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setDescription] = useState('');
  const [contact, setContact] = useState({});
  const [tags, setTags] = useState([]);
  const [address, setAddress] = useState('');
  const [reviewCount, setReviewCount] = useState('');
  const [score, setScore] = useState(0);
  const [price, setPrice] = useState(0);
  const [about, setAbout] = useState('');
  const [banner, setBanner] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [workWith, setWorksWith] = useState([]);
  const [instaPic, setInsta] = useState([]);
  const [userReviews, setReviews] = useState([]);
  const [startDate, setDate] = useState('');
  const [requestStatus, setReqStatus] = useState(false);
  const [visibleReviewCount, setVisReviewCount] = useState(4);

  useEffect(() => {
    // get info and set state with it (will eventually be requesting for business info from db)
    const { name, description, tags, price, rhizScore, contact, address, reviewCount, about, banner, profile } = business;
    setBusinessName(name);
    setDescription(description);
    setContact(contact);
    setTags(tags);
    setAddress(address);
    setScore(rhizScore);
    setPrice(price);
    setTags(tags);
    setReviewCount(reviewCount);
    setAbout(about);
    setBanner(banner);
    setProfilePic(profile);
    setWorksWith(worksWith);
    setInsta(instaPics);
    setReviews(reviews);
  });

  //methods

  // showing the price point
  const renderDollarSigns = () => {
    const faintStyle = { color: '#D3D3D3' };
    switch (price) {
      case 4: 
        return ( <Row><Dollar>$</Dollar><Dollar>$</Dollar><Dollar>$</Dollar><Dollar>$</Dollar></Row> )
      case 3:
        console.log('bingo')
        return ( <Row><Dollar>$</Dollar><Dollar>$</Dollar><Dollar>$</Dollar><Dollar color={faintStyle}>$</Dollar></Row> )
      case 2:
        return ( <Row><Dollar>$</Dollar><Dollar>$</Dollar><Dollar color={faintStyle}>$</Dollar><Dollar color={faintStyle}>$</Dollar></Row> )
      case 1:
        return ( <Row><Dollar>$</Dollar><Dollar color={faintStyle}>$</Dollar><Dollar color={faintStyle}>$</Dollar><Dollar color={faintStyle}>$</Dollar></Row> )
    };
  };

  // updating urgency 
  const updateUrgency = (status) => {
    // get new selection
    setUrgency(status);
  };

  const upadeStartDate = (date) => {
    setDate(date);
  };

  // Connection Request
  const sendRequest = () => {
    // gather urgency, start date, any other info to go with the request
    // make whatever api request that will go with this
    console.log('request sent');
    setReqStatus(true);
  };

  // show whole review if part is cut off
  const readMore = (event) => {
    // figure out which review was clicked on 
    // set read more for that review to true
  };

  // load up more reviews
  const loadMore = () => {
    const newVisReviewCount = visibleReviewCount + 4;
    console.log('newVisibleReviewCount: ', newVisReviewCount);
    // setVisReviewCount(newVisReviewCount);
  };

  
  
  return (
    <div>
      {/* <ParallaxImage
        bgImage={banner} 
        height={{ height: "250px" }}
        alt="parallaximg"
        src={profilePic}
        size={{ height: '40%', width: '22%', marginTop: '5%' }}
        title={businessName}
        text={businessDescription}
        style={{ marginBottom: '25%'}}
        headerStyle='20%'
      /> */}
      <Row>
        <Container>
          {renderDollarSigns()}
        </Container>
        <Sidebar 
          score={score} 
          urgency={urgency} 
          instaPics={instaPic} 
          changeUrgency={updateUrgency} 
          sendRequest={sendRequest}
        />
      </Row>
    
    </div>
  )
};



export default BusinessProfile;

