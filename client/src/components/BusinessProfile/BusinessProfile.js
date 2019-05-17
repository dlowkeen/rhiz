// dependencies
import React, { useState, useEffect } from 'react';
import { connect  } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import commaNumber from 'comma-number';
// import { Icon } from 'semantic-ui-react';

// components
import Sidebar from './subcomponents/Sidebar';
import Reviews from './subcomponents/Reviews';
import BusinessMapContainer from './subcomponents/BusinessMapContainer';
import { Container, Row, Dollar, Tag, WorksWithPic, RoundPic, BoldText, SmallText } from './BusinessProfileStyles/index';
import ParallaxBuis from './subcomponents/ParallaxBuis';

// assets
import { business, reviews, worksWith, instaPics } from './BusinessInfo';



const BusinessProfile = () => {
  //state
  const [review1, readMore1] = useState(false);
  const [review2, readMore2] = useState(false);
  const [review3, readMore3] = useState(false);
  const [review4, readMore4] = useState(false);
  const [urgency, setUrgency] = useState('Just Curious');
  const [mutualFriends, setMutual] = useState(0);
  const [totalFriends, setTotal] = useState(0);
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
  const [startDate, setDate] = useState(new Date());
  const [requestStatus, setReqStatus] = useState(false);
  const [visibleReviewCount, setVisReviewCount] = useState(4);
  const [calendarFocused, setCalendarFocus] = useState(false);

  useEffect(() => {
    // get info and set state with it (will eventually be requesting for business info from db)
    const { 
      name, description, tags, price, rhizScore, contact, address, reviewCount, about, banner, profile, mutualFriends, totalFriends 
    } = business;
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
    setMutual(mutualFriends);
    setTotal(totalFriends);
  });

  //methods

  // showing the price point
  const renderDollarSigns = () => {
    switch (price) {
      case 4: 
        return ( <Row>
          <Dollar>$</Dollar>
          <Dollar>$</Dollar>
          <Dollar>$</Dollar>
          <Dollar>$</Dollar>
        </Row> )
      case 3:
        return ( <Row>
          <Dollar>$</Dollar>
          <Dollar>$</Dollar>
          <Dollar>$</Dollar>
          <Dollar color="true">$</Dollar>
        </Row> )
      case 2:
        return ( <Row>
          <Dollar>$</Dollar>
          <Dollar>$</Dollar>
          <Dollar color="true">$</Dollar>
          <Dollar color="true">$</Dollar>
        </Row> )
      case 1:
        return ( <Row>
          <Dollar>$</Dollar>
          <Dollar color="true">$</Dollar>
          <Dollar color="true">$</Dollar>
          <Dollar color="true">$</Dollar>
        </Row> )
    };
  };

  // updating urgency 
  const updateUrgency = (event) => {
    // get new selection
    console.log('new urgency: ', event.target.value)
    // setUrgency(event.target.value);
  };

  const focusOnCalendar = () => {
    // setCalendarFocus(!calendarFocused);
  }
  const updateStartDate = (date) => {
    console.log('Date Chosen: ', date)
    // setDate(date);
  };

  // Connection Request
  const sendRequest = () => {
    // gather urgency, start date, any other info to go with the request
    // make whatever api request that will go with this
    console.log('request sent');
    // setReqStatus(true);
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
      <ParallaxBuis
        bgImage={banner} 
        height={{ height: "250px" }}
        alt="parallaximg"
        src={profilePic}
        size={{ height: '30%', width: '20%', marginTop: '5%', left: '-65%' }}
        title={businessName}
        text={businessDescription}
        headerStyle='20%'
      />
      <Row style={{ marginBottom: '5%', marginTop: '-15%' }}>
        <Container style={{width: '67%', marginLeft: '5%' }}>
          <Row style={{ fontSize: '20px', marginBottom: '2.5%' }}>
            <SocialIcon network="facebook" style={{ marginRight: '1%', width: 23, height: 23, marginTop: '-0.2%' }}/>
            {mutualFriends} of your Facebook friends and {commaNumber(totalFriends)} people have liked Blades of Glory 
          </Row>
          <Row style={{ marginBottom: '5%' }}>
            <Row style={{ width: '60%' }}>
              {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
            </Row>
            <Row style={{ width: '40%', marginLeft: '-8%' }}>
              {renderDollarSigns()}
            </Row>
          </Row>
            <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1.5%' }}>Works With</Row>
            <Row style={{ fontSize: '15px', marginBottom: '1.5%' }}>See our recomended partners</Row>
            <Row style={{ marginBottom: '3.5%', flexWrap: 'wrap' }}>
              {workWith.map((pic, i) => <WorksWithPic src={pic.pic} key={i}/>)}
            </Row>
            <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2%' }}>About Us</Row>
            <Row style={{ fontSize: '15px', marginBottom: '3.5%', width: '65%' }}>{about}</Row>
            <Row style={{ marginBottom: '4%' }}>
              <RoundPic src={contact.pic} />
              <Container style={{ marginTop: '1.2%' }}>
                <BoldText>{contact.name}</BoldText>
                <SmallText>{contact.title}</SmallText>
              </Container>
            </Row>
            <Row style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2%' }}>Location</Row>
            <Row style={{ fontSize: '15px', color: '#999', marginBottom: '2%' }}>
              <img src="https://img.icons8.com/material/24/000000/marker.png" style={{ height: '25px', width: '25px', marginRight: '0.25%', marginTop: '' }} />
              <div style={{ marginTop: '0.25%' }}>{address}</div>
            </Row>
            <BusinessMapContainer address={address} />
        </Container>
        <Container>
          <Sidebar 
            score={score} 
            urgency={urgency} 
            instaPics={instaPic} 
            changeUrgency={updateUrgency} 
            sendRequest={sendRequest}
            getDate={updateStartDate}
            date={startDate}
            focusCalendar={setCalendarFocus}
            focused={calendarFocused}
          />
        </Container>
      </Row>
      {/* Line here */}
      <Container style={{ marginLeft: '5%' }}>
        <Reviews reviews={userReviews} reviewCount={reviewCount} />
      </Container>
    </div>
  )
};



export default BusinessProfile;

