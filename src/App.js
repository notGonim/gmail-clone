import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Mail } from './components/mail/Mail';
import { EmailList } from './components/mailList/EmailList';
import { SendMail } from './components/sendmail/SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Login } from './components/Login';
import { auth } from './firebase';
import { LogInAction } from './actions/UserAction';

function App() {

  const { ...data } = useSelector(state => state.mail)
  const isOpend = data.sendMessageIsOpen
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(LogInAction(
          {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }
        ))
      }
    })
  }, [])


  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
          <div className="App">
            <Header />

            <div className="App_body">
              <Sidebar />
              <Switch>
                <Route path="/mail" exact component={Mail} />
                <Route path="/" exact component={EmailList} />
              </Switch>
            </div>
            {isOpend && <SendMail />}
          </div>

        )
      }
    </Router >
  );
}

export default App;
