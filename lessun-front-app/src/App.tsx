import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import HeadLinks from "./components/shared/HeadLinks";
import FooterScriptLinks from "./components/shared/FooterScriptLinks";
import FrontPageFull from './components/home/FrontPageFull';
import Login from './components/account/Login';
import Register from './components/account/Register';
import AboutUs from './components/pages/AboutUs';
import NewsList from './components/news/NewsList';
import CoursesList from './components/courses/CoursesList';
import SingleCourse from './components/courses/SingleCourse';
import ContactUs from './components/pages/ContactUs';
import Article from './components/news/Article';


const App = () => {
  return (
    <Router>
      <html lang="en">
        <HeadLinks />
        <body className="regular-navigation">
          <div id="master-wrapper">
            <Header />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/Home"><Home /></Route>
              <Route exact path="/Login"><Login /></Route>
              <Route exact path="/Register"><Register /></Route>
              <Route exact path="/AboutUs"><AboutUs /></Route>
              <Route exact path="/ContactUs"><ContactUs /></Route>
              <Route exact path="/NewsList"><NewsList /></Route>
              <Route exact path="/Article"><Article /></Route>
              <Route exact path="/CoursesList"><CoursesList /></Route>
              <Route exact path="/SingleCourse/:id"><SingleCourse /></Route>
            </Switch>
            <Footer />
          </div>
          <FooterScriptLinks />
        </body>
      </html>
    </Router>
  )
}

export default App;
