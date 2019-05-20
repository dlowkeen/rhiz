import styled from 'styled-components';

export const Banner = styled.div`
  background-image: ${props => `url(${props.src})`};
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const Main = styled.div`
  font-family: 'Karla', sans-serif;
`;

export const Row = styled.div`
  display: flex;
  flex-direction; row;
  font-size: 18px
`;

export const Dollar = styled.div`
  margin-right: 13%;
  fontSize: 23px;
  color: ${props => props.color ? '#D3D3D3' : 'black'};
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  font-size: 20px;
  color: #43b02a;
  margin-right: 3%;
`;

export const WorksWithPic = styled.img`
  margin-right: 1.5%;
  height: 60px;
  width: 140px;
  margin-top: 1%
`;

export const RoundPic = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-right: 1.7%;
`;

export const BoldText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2.5%;
`;

export const SmallText = styled.div`
  font-size: 13px;
  color: #999;
`;

export const Line = styled.div`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  color: black;
`;

export const Button = styled.button`
  background-color: #43b02a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 60%;
`;

export const InstaPic = styled.img`
  height: 70px;
  width: 70px;
  margin-right: 8%;
  margin-bottom: 5%;
`;

