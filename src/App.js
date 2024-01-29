import logo from './logo.svg';
import './App.css';

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

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Simple Web Chat</Typography>
        </Toolbar>
      </AppBar>
      <Paper style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h6">Welcome, {userName}!</Typography>
        <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px' }}>
          {messages.map((message, index) => (
            <p key={index}>
              <strong>{message.user}:</strong> {message.text}
            </p>
          ))}
        </div>
        <TextField
          label="Type your message..."
          fullWidth
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage} style={{ marginTop: '10px' }}>
          Send
        </Button>
      </Paper>
      <Button variant="outlined" color="primary" onClick={handleSetUserName} style={{ marginTop: '20px' }}>
        Set User Name
      </Button>
    </Container>
  );
};

export default App;
