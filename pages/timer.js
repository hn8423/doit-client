import React, { useEffect, useRef } from 'react';
import Router from 'next/router';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TimerEl from '../components/TimerEl';
import TimerCard from '../components/TimerCard';
import Feedback from '../components/Feedback';

const Wrapper = styled.div`
  margin-top: 40px !important;

  @media (max-width: 767px) {
    & > div > .ant-col {
      margin-bottom: 40px;
    }
  }
`;

const Timer = () => {
  const doneEl = useRef();
  const todoEl = useRef();

  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me && me.id]);

  return (
    <Wrapper className="container">
      <Row gutter={24} type="flex" justify="space-between">
        <Col xs={24} md={8}>
          <TimerEl todoEl={todoEl} />
        </Col>

        <Col xs={24} md={16}>
          <TimerCard todoEl={todoEl} doneEl={doneEl} />
        </Col>
      </Row>
      <Feedback />
    </Wrapper>
  );
};

export default Timer;
