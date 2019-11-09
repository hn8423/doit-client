import React, { useState } from 'react';
import { Form, Col, Row, Icon, Button, Input } from 'antd';
import styled from 'styled-components';
import Router from 'next/router';
import axios from 'axios';

const FormBox = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin: 250px;
  border: 1px solid coral;
`;

const nickHandler = init => {
  const [value, setValue] = useState(init);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};
const idHandler = init => {
  const [value, setValue] = useState(init);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};
const pinHandler = init => {
  const [value, setValue] = useState(init);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

const submitHandler = async (nick, id, pin) => {
  console.log(nick, id, pin);
  const check = await axios({
    method: 'post',
    url: 'http://localhost:8085/api/user/signup',
    headers: {},
    data: {
      email: id,
      nickname: nick,
      password: pin
    }
  });
  console.log(check);
  if (check.status === 200) {
    Router.push('/timer');
  }
  // 실패시?
};
const Inputs = () => {
  let useNick = nickHandler('');
  let nick = useNick.value;
  let useId = idHandler('');
  let id = useId.value;
  let usePin = pinHandler('');
  let pin = usePin.value;

  return (
    <FormBox>
      <Form>
        <Form.Item label="닉네임">
          <Input {...useNick} />
        </Form.Item>
        <Form.Item label="아이디">
          <Input {...useId} />
        </Form.Item>
        <Form.Item label="비밀번호">
          <Input {...usePin} type='password' />
        </Form.Item>
        <Button onClick={() => submitHandler(nick, id, pin)}>완료</Button>
      </Form>
    </FormBox>
  );
};

export default Inputs;
