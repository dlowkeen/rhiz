// packages
import React, { useState, useEffect } from 'react';
import { connect  } from 'react-redux';
import { SocialIcon } from 'react-social-icons';

// components
import Sidebar from './subcomponents/Sidebar';
// import Reviews from './subcomponents/Reviews';
// import BusinessMapContainer from './subcomponents/BusinessMapContainer'
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
        return ( <Row><Dollar>$</Dollar><Dollar>$</Dollar><Dollar>$</Dollar><Dollar>$</Dollar></Row> )
      case 3:
        console.log('bingo')
        return ( <Row><Dollar>$</Dollar><Dollar>$</Dollar><Dollar>$</Dollar><Dollar color>$</Dollar></Row> )
      case 2:
        return ( <Row><Dollar>$</Dollar><Dollar>$</Dollar><Dollar color>$</Dollar><Dollar color>$</Dollar></Row> )
      case 1:
        return ( <Row><Dollar>$</Dollar><Dollar color>$</Dollar><Dollar color>$</Dollar><Dollar color>$</Dollar></Row> )
    };
  };

  // updating urgency 
  const updateUrgency = (status) => {
    // get new selection
    setUrgency(status);
  };

  const focusOnCalendar = () => {
    setCalendarFocus(!calendarFocused);
  }
  const updateStartDate = (date) => {
    console.log('Date Chosen: ', date)
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
      <ParallaxBuis
        bgImage={banner} 
        height={{ height: "250px" }}
        alt="parallaximg"
        src={profilePic}
        size={{ height: '30%', width: '16%', marginTop: '5%', left: '-65%' }}
        title={businessName}
        text={businessDescription}
        headerStyle='20%'
      />
      <Row style={{ marginBottom: '5%' }}>
        <Container style={{width: '67%', marginLeft: '5%' }}>
          <Row style={{ fontSize: '16px', marginBottom: '1.5%' }}>
            <SocialIcon network="facebook" style={{ marginRight: '1%', width: 23, height: 23, marginTop: '-0.2%' }}/>
            {mutualFriends} of your Facebook friends and {totalFriends} people have liked Blades of Glory 
          </Row>
          <Row style={{ marginBottom: '3%' }}>
            <Row style={{ width: '60%' }}>
              {tags.map((tag) => <Tag>{tag}</Tag>)}
            </Row>
            <Row style={{ width: '40%', marginLeft: '-15%' }}>
              {renderDollarSigns()}
            </Row>
          </Row>
            <Row style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1%' }}>Works With</Row>
            <Row style={{ fontSize: '13px', marginBottom: '1%' }}>See our recomended partners</Row>
            <Row style={{ marginBottom: '3%' }}>{worksWith.map((pic) => <WorksWithPic src={pic.pic} />)}</Row>
            <Row style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '1%' }}>About Us</Row>
            <Row style={{ fontSize: '13px', marginBottom: '2%', width: '50%' }}>{about}</Row>
            <Row>
              <RoundPic src={contact.pic} />
              <Container style={{ marginTop: '.5%' }}>
                <BoldText>{contact.name}</BoldText>
                <SmallText>{contact.title}</SmallText>
              </Container>
            </Row>
        </Container>
        <Container style={{ width: '33%' }}>
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
    
    </div>
  )
};



export default BusinessProfile;

