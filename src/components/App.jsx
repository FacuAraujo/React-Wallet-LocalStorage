import React, { Component } from 'react';
import Form from './Form/Form';
import Card from './Card/Card';
import WalletPopUp from './WalletPopUp/WalletPopUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      cardName: '',
      cardYear: '',
      cardMonth: '',
      cardCvv: '',
      // Input focus
      focused: false,
      cards: [],
    };
  }

  componentDidMount() {
    const cardsData = JSON.parse(localStorage.getItem('cards'));
    if (cardsData) {
      this.setState({ cards: cardsData });
    }
  }

  // Input CVV focus
  handleFocus() {
    this.setState({ focused: true });
  }

  // Input CVV blur
  handleBlur() {
    this.setState({ focused: false });
  }

  // Input values
  handleChange(e) {
    const { name, value } = e.target;

    if (name === 'cardNumber' || name === 'cardCvv' || name === 'cardDate') {
      if (!/^([0-9])*$/.test(value)) {
        return console.log('No es un caractér válido');
      } else {
        this.setState({
          [name]: value,
        });
      }
    }

    this.setState({
      [name]: value,
    });
  }

  // Send Input
  handleSubmit(e) {
    e.preventDefault();
    console.log('Enviado !');

    const { cards, ...all } = this.state;
    if (this.state.cards) {
      this.setState({ cards: [...this.state.cards, all] });
      localStorage.setItem('cards', JSON.stringify([...this.state.cards, all]));
    } else {
      this.setState({ cards: [all] });
      localStorage.setItem('cards', JSON.stringify(this.state.cards));
    }

    this.setState({
      cardNumber: '',
      cardName: '',
      cardYear: '00',
      cardMonth: '00',
      cardCvv: '',
    });
  }

  render() {
    return (
      <div className="contain">
        <Card
          cardName={this.state.cardName}
          cardNumber={this.state.cardNumber}
          cardYear={this.state.cardYear}
          cardMonth={this.state.cardMonth}
          cardCvv={this.state.cardCvv}
          focused={this.state.focused}
        />
        <Form
          cardName={this.state.cardName}
          cardNumber={this.state.cardNumber}
          cardCvv={this.state.cardCvv}
          cardYear={this.state.cardYear}
          cardMonth={this.state.cardMonth}
          onChange={(e) => {
            this.handleChange(e);
          }}
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
          onFocus={() => {
            this.handleFocus();
          }}
          onBlur={() => {
            this.handleBlur();
          }}
        />

        <WalletPopUp cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
