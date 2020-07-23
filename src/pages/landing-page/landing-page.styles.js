import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
`


export const TopModule = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;  
  width: 100%;
  align-items: center;
  background: linear-gradient(to bottom right, #f2f5ff 50%, white 25%, white 25%);
  height: 80vh;
  // border: 1px solid red;

`

export const TextContainer = styled.div`
  width: 60%;
  text-align: center;
  // border: 1px solid red;

  h1 {
    font-size: 70px;
  }

  p {
    // width: 80%;
    font-size: 30px;
    color: grey;
    font-weight: lighter !important;
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(160deg, white 35%, #e0b8c5, #e0b8c5);
`

export const GetStartedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0b8c5;
  width: 100%;
  padding: 100px 0 200px 0;

  h1 {
    font-size: 70px;
    margin-bottom: 0;
  }

  p {
    // width: 80%;
    font-size: 30px;
    color: grey;
    font-weight: lighter !important;
  }
`

export const GetStartedButton = styled(Link)`
  border: 1px solid black;
  font-size: 20px;
  padding: 10px;
  color: black;

  :hover {
    color: grey;
    border: 1px solid grey;
  }
`