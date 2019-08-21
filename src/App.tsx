import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Timer from './components/Timer';
import AboutUs from './containers/AboutUs';
import Settings from './containers/Settings';

import './App.scss';
type links = {
  url: string;
  text: string;
}[]
const App: React.FC = () => {
  const headerLinks: links = [{ url: '/', text: 'Home' }, { url: '/settings', text: 'Settings' }, { url: '/about-us', text: 'About US' }];

  const reset = () => {
    console.log('changed');
  }
  const aboutUsData = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const settings = `Settings Page to be displayed here...!`;
  return (
    <div className="App">
      <Router>
      <Header title="Tomato Timer" links={headerLinks} />
        <Route path="/Pomodoro-Timer" exact render={() => (<Timer reset={() => { reset() }} />)} />
        <Route path="/about-us" exact render={() => (<AboutUs data={aboutUsData} />)} />
        <Route path="/settings" exact render={() => (<Settings data={settings} />)} />
      </Router>
    </div>
  );
}

export default App;
