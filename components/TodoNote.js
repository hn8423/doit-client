import React, { useEffect, useCallback } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  Input,
  message,
} from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import {
  PAUSE_TIMER,
  TODO_COMPLETE_REQUEST,
  TODO_COMPLETE_CLEANUP,
} from '../reducers/timer';
import messages from '../config/messages';

const Wrapper = styled.div`
  .ant-card {
    border-radius: 4px;
    
    & .ant-card-body {
      padding: 0;

      &>textarea {
        border: 0;
        border-top: 1px solid #ededed;  
      }
    }
  }

  button {
    width: 100%;
  }
`;

const TodoNote = ({
  verifyContent,
  todoContent,
  setTodoContent,
  doneContent,
  setDoneContent
}) => {
  const { TextArea } = Input;
  const {
    isStarted,
    isRunning,
    todoId,
    timelineId,
    isSavingTodo,
    isSaveTodoSuccess,
  } = useSelector((state) => state.timer);

  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSavingTodo && isSaveTodoSuccess) {
      message.success(messages.complete);
      dispatch({
        type: TODO_COMPLETE_CLEANUP,
      });
    }
  }, [isSavingTodo === false, isSaveTodoSuccess === true]);

  const onComplete = useCallback(() => {
    dispatch({
      type: PAUSE_TIMER,
    });
    const verified = verifyContent(doneContent);
    if (!verified) {
      return message.warning(messages.doneContentEmpty);
    }
    dispatch({
      type: TODO_COMPLETE_REQUEST,
      data: {
        doneContent: verified || 'OK',
        todoId,
        timelineId,
        endedAt: moment()
          .utc()
          .format(),
      },
    });
    setTodoContent('');
    setDoneContent('');
  }, [doneContent, todoId, timelineId]);

  const onChangeTodoContent = useCallback((e) => {
    setTodoContent(e.target.value);
  }, []);

  const onChangeDoneContent = useCallback((e) => {
    setDoneContent(e.target.value);
  }, []);

  return (
    <Wrapper>
      <Row className="todoRow" gutter={24} type="flex" justify="space-between">
        <Col xs={24} md={12}>
          <Card title="지금 할일">
            <TextArea
              value={todoContent}
              onChange={onChangeTodoContent}
              placeholder={messages.writeTodo}
              rows={10}
              disabled={isStarted || !me}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="결국 한일">
            <TextArea
              value={doneContent}
              onChange={onChangeDoneContent}
              placeholder={messages.writeDone}
              rows={10}
              disabled={!isStarted || isRunning}
            />
          </Card>
        </Col>
      </Row>

      <Button
        type="primary"
        onClick={onComplete}
        loading={isSavingTodo}
        disabled={!isStarted}
      >
        할일 다 했으면 언제든 컴플릿!
      </Button>
      <Button className="feedback" type="link" href="https://docs.google.com/forms/d/e/1FAIpQLScnUOEzRw9EvgVkLU8WKSidIlImg48gj_N8TB_rbsqF9thWbA/viewform?vc=0&c=0&w=1" target="_blank">
        두잇 팀을 위해 피드백을 주세욧
      </Button>
    </Wrapper>
  );
};

export default TodoNote;
