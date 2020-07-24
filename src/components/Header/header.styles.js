import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // margin-bottom: ${props => props.path.location.pathname === '/landing' ? '0' : '25px'};
  position: fixed;
  top: 0;
  background-color: white;
  opacity: 0.9;
  border-bottom: 1px solid #d4d4d4;
`

export const LogoContainer = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BrandName = styled.h1`
color: #5680E9;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3%;
`

export const OptionContainer = styled(Link)`
  padding: 10px 15px;
  color: #4a4a4a;
`

export const AccountContainer = styled(Link)`
  margin: 0 10px;
  padding: 10px 15px;
  color: #5680E9;
  border: 1px solid #5680E9;
`