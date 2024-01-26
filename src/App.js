import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Paper, AppBar, Toolbar, Typography } from '@material-ui/core';

import { setUserName, sendMessage, loadMessageHistory } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const messages = useSelector((state) => state.messages);

  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    dispatch(loadMessageHistory());
  }, [dispatch]);

  const handleSetUserName = () => {
    const name = prompt('Enter your name:');
    dispatch(setUserName(name));
  };

  const handleSendMessage = () => {
    dispatch(sendMessage(messageInput));
    setMessageInput('');
  };

};

export default App;
