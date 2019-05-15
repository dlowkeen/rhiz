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