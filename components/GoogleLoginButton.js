import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { GOOGLE_CLIENT_ID } from '../config/key.json';
import { GOOGLE_AUTH_REQUEST } from '../reducers/user';

const StyledGoogleLogin = styled(GoogleLogin)`
  display: flex !important;
  box-shadow: none !important;
  font-family: inherit !important;
  height: 46px;
  outline: 0;

  &>* {
    display: flex;
    padding: 0 !important;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 400 !important;
  }
`;

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const responseSuccess = (response) => {
    // console.log(response);
    const { id_token } = response.tokenObj;
    dispatch({
      type: GOOGLE_AUTH_REQUEST,
      data: {
        token: id_token,
      },
    });
  };
  const responseFail = (response) => {
    console.log(response);
  };
  return (
    <StyledGoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="로그인"
      onSuccess={responseSuccess}
      onFailure={responseFail}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
