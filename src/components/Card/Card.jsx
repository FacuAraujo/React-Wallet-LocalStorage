import React, { Component } from 'react';
import visaLogo from '../../assets/img/visa-logo.svg';

import './styles.scss';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
  }
  render() {
    let flipCard = '';
    if (this.props.focused || this.state.isHover) {
      flipCard = 'card-flip';
    } else {
      flipCard = '';
    }

    // Render tarjeta entera
    return (
      <div
        className="flip-container"
        onMouseOver={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <div className={'credit-card ' + flipCard}>
          <div className="card-front">
            <div className="visa-logo">
              <img src={visaLogo} alt="Visa" />
            </div>

            <div className="data-number">
              <Number number={this.props.cardNumber} />
            </div>

            <div className="data-name">
              <Name name={this.props.cardName} />
            </div>

            <div className="data-date">
              <Date month={this.props.cardMonth} year={this.props.cardYear} />
            </div>
          </div>

          <div className="card-back">
            <div className="magnetic-bar"></div>
            <div className="back-info">
              <div className="white-bar"></div>
              <div className="data-cvv">
                <Cvv cvv={this.props.cardCvv} />
              </div>
            </div>
            <div className="visa-logo-back">
              <img src={visaLogo} alt="Visa" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Componente numero de tarjeta
const Number = (props) => {
  let number = props.number;
  let cardNumber = [];
  for (let i = 0; i < 16; i++) {
    if (number[i]) {
      cardNumber.push(number[i]);
    } else {
      cardNumber.push('X');
    }
  }
  return cardNumber.map((char, key) => (
    <span
      key={key}
      className={
        !isNaN(char) ? 'single-number animate-slideUp' : 'single-number'
      }
    >
      {char}
    </span>
  ));
};

// Componente nombre de tarjeta
const Name = (props) => {
  return (
    <>
      <div className="label">Card name</div>
      <span className="card-data name">{props.name || 'Name Last Name'}</span>
    </>
  );
};

// Componenete fecha de tarjeta
const Date = (props) => {
  const month = props.month ? props.month : 'XX';
  const year = props.year ? props.year : 'XX';

  return (
    <div className="card-date">
      <div className="label">Good Trhu</div>
      <span className="card-data date">
        <span className="single-number animate-slideUp">{month}</span>/
        <span className="single-number animate-slideUp">{year.slice(-2)}</span>
      </span>
    </div>
  );
};

// Componente codigo de seguridad de tarjeta
const Cvv = (props) => {
  let cvv = props.cvv;
  let cardCvv = [];
  for (let i = 0; i < 3; i++) {
    if (cvv[i]) {
      cardCvv.push(cvv[i]);
    } else {
      cardCvv.push('X');
    }
  }
  return (
    <>
      <div className="label">CVV</div>
      <span className="card-data cvv">
        {cardCvv.map((char, key) => (
          <span
            key={key}
            className={
              !isNaN(char)
                ? 'single-number single-cvv animate-slideUp'
                : 'single-number single-cvv'
            }
          >
            {char}
          </span>
        ))}
      </span>
    </>
  );
};

export default Card;
