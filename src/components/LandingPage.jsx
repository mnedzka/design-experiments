import React, { Component } from 'react';
import './styles.css';

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className='temp' />
        <div className='first-block' />
        <div className='second-block' />
        <div className='loader'>
          <ul>
            <li>L</li>
            <li>O</li>
            <li>A</li>
            <li>D</li>
            <li>I</li>
            <li>N</li>
            <li>G</li>
          </ul>
        </div>
        <div className='third-block' />
        <div className='menu'>
          <ion-icon name='menu' />
        </div>
        <div className='logo'>
          <span>Explore</span>
        </div>
        <div className='content'>
          <div className='heading'>
            <span>Faroes Islands</span>
          </div>
          <div className='desc'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorum similique
              quidem placeat assumenda eius officiis voluptatum maiores libero porro.
            </p>
          </div>
          <div className='link'>
            <button type='button'>VISIT NOW</button>
          </div>
        </div>
        <div className='image'>
          <img src='./images/hero.jpg' alt='' />
        </div>
        <div className='media'>
          <ul>
            <li>
              <ion-icon name='logo-facebook' />
              <ion-icon name='logo-instagram' />
              <ion-icon name='logo-twitter' />
            </li>
          </ul>
        </div>
        <div className='watch'>
          <ion-icon name='play' />
        </div>
      </>
    );
  }
}

export default LandingPage;
