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
  margin-right: 1%;
  color: ${props => `${props.color}`};
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;