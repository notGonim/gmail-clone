import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Test } from './components/header/Test'
import { Sidebar } from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Mail } from './components/mail/Mail';
import { EmailList } from './components/mailList/EmailList';
import { SendMail } from './components/sendmail/SendMail';

function App() {
  return (


    <Router>
      <div className="App">
        <Header />
        <div className="App_body">
          <Sidebar />
          <Switch>
            <Route path="/mail" exact component={Mail} />
            <Route path="/" exact component={EmailList} />
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
