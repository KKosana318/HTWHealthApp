import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
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
  color: grey;
`

export const AccountContainer = styled(Link)`
  padding: 10px 15px;
  color: #5680E9;
  border: 1px solid #5680E9;
`