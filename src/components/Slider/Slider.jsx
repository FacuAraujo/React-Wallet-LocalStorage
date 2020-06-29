import React, { Component } from 'react';
import Card from '../Card/Card';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './styles.scss';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 20,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const storageCards = JSON.parse(localStorage.getItem('cards'));
    this.setState({ cards: storageCards });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.state.cards.map((card, key) => (
            <div key={key} className="swiper-slide">
              <Card {...card} />
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
export default Slider;
