import styled from 'styled-components';

export const Banner = styled.div`
  background-image: ${props => `url(${props.src})`};
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction; row;
  font-size: 18px
`;

export const Dollar = styled.div`
  margin-right: 35%;
  color: ${props => props.color ? '#D3D3D3' : 'black'};
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  font-size: 16px;
  color: #43b02a;
  margin-right: 3%;
`;

export const WorksWithPic = styled.img`
  margin-right: 1.5%;
  height: 45px;
  width: 112px;
`;

export const RoundPic = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 1.7%;
`;

export const BoldText = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.25%;
`;

export const SmallText = styled.div`
  font-size: 11px;
  color: #999;
`;

