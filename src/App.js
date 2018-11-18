/*jshint esversion: 6 */ 
import React, { Component } from 'react';
import { connect } from "react-redux";
import Reviews from './Reviews';
import Delivery from './Delivery';
import About from './About';
import './App.css';
import logo from './logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import fire from './images/fire.jpg';
import fire2 from './images/fire2.jpg';
import fire3 from './images/fire3.jpg';
import fire4 from './images/fire4.jpg';
import fire5 from './images/fire5.jpg';
import './styles.global.scss';
import { Message } from "semantic-ui-react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        'con1': true,
        'con2': false,
        'con3': false
    };
  }

  handleClick1() {

    this.setState({
      'con1': true,
      'con2': false,
      'con3': false
    });
}

handleClick2() {

  this.setState({
    'con1': false,
    'con2': true,
    'con3': false
  });
}

handleClick3() {

  this.setState({
    'con1': false,
    'con2': false,
    'con3': true
  });
}

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Carousel className="carousel" autoPlay={true} showIndicators={false} transitionTime={1000} showThumbs={false} infiniteLoop emulateTouch>
            <div>
                <img src={fire} />
                <p className="legend">
                    Legend 1
                </p>
            </div>
            <div>
                <img src={fire2} />
                <p className="legend">
                    Legend 2
                </p>
            </div>
            <div>
                <img src={fire3} />
                <p className="legend">
                    Legend 3
                </p>
            </div>
            <div>
                <img src={fire4} />
                <p className="legend">
                    Legend 4
                </p>
            </div>
            <div>
                <img src={fire5} />
                <p className="legend">
                    Legend 5
                </p>
            </div>
          </Carousel>
        <div className="App-logo">
        <div className="icon cloudy">
          <div className="cloud"/>
          <div className="cloud"/>
        </div>
        <div>
        <img src={logo} className="App-logo" alt="logo" /> 
          <div className="stage">
            <div className="campfire">
              <div className="sparks">
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
                <div className="spark"></div>
              </div>
              <div className="logs">
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
                <div className="log">
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                  <div className="streak"></div>
                </div>
              </div>
              <div className="sticks">
                <div className="stick"></div>
                <div className="stick"></div>
                <div className="stick"></div>
                <div className="stick"></div>
              </div>
              <div className="fire">
                <div className="fire__red">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
                <div className="fire__orange">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
                <div className="fire__yellow">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
                <div className="fire__white">
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          
        </p>
        <div id="top-nav">
          <nav className="main-nav">
            <ul>
              <li id="item1" className="index-collection">
                <button onClick={(e) => this.handleClick1(e)} className="active-link" className={this.state.con1 ? "active-link" : "b"}>ABOUT US</button>
              </li>
              <li id="item2" className="index-collection">
                <button onClick={(e) => this.handleClick2(e)} className={this.state.con2 ? "active-link" : "b"}>DELIVERY</button>
              </li>
              <li id="item3" className="page-collection">
                <button onClick={(e) => this.handleClick3(e)} className={this.state.con3 ? "active-link" : "b"}>REVIEWS</button>
              </li>
            </ul>
          </nav>

          <section id="page" role="main" data-content-field="main-content"> 
            <div className={this.state.con1 ? 'ON' : 'OFF'}>
              <About/> 
            </div>
            <div className={this.state.con2 ? 'ON' : 'OFF'}>
              <Delivery/> 
            </div>
            <div className={this.state.con3 ? 'ON' : 'OFF'}>
              <Reviews/>    
            </div> 
          </section>
        </div>
        <section>
          <footer>Design & Development by  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/neveh-allon/">Neveh Allon</a></footer>
        </section>

        </div>
    );
  }
}

const mapStateToProps = state => {
  return state.form.profile
    ? {
        values: state.form.reviews.values,
        submitSucceeded: state.form.reviews.submitSucceeded
      }
    : {};
};

export default connect(mapStateToProps)(App);
