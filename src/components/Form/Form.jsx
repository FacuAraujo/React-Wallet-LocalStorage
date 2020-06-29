import React, { Component } from 'react';
import './styles.scss';

class Form extends Component {
  render() {
    return (
      <div>
        <h1 className="form-title">Card information</h1>
        <form
          onSubmit={(e) => {
            this.props.onSubmit(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="cardNumber"
              value={this.props.cardNumber}
              placeholder="Number"
              maxLength="16"
              minLength="16"
              onChange={(e) => {
                this.props.onChange(e);
              }}
              required
            />
          </div>
          <div className="form-group ">
            <input
              type="text"
              className="form-control"
              name="cardName"
              value={this.props.cardName}
              placeholder="Card name"
              minLength="2"
              onChange={(e) => {
                this.props.onChange(e);
              }}
              required
            />
          </div>

          <div className="form-row">
            <div className="col-8">
              <div className="form-row">
                <div className="col-7">
                  <select
                    className="custom-select"
                    name="cardMonth"
                    defaultValue="Month"
                    onChange={(e) => {
                      this.props.onChange(e);
                    }}
                    value={this.props.cardMonth || '00'}
                    required
                  >
                    <option value="00" disabled="disabled">
                      Month
                    </option>
                    <option value="01">Enero</option>
                    <option value="02">Febrero</option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Septiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
                  </select>
                </div>

                <div className="col-5">
                  <select
                    className="custom-select"
                    name="cardYear"
                    defaultValue="Year"
                    onChange={(e) => {
                      this.props.onChange(e);
                    }}
                    value={this.props.cardYear || '00'}
                    required
                  >
                    <option value="00" disabled="disabled">
                      Year
                    </option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col col-cvv">
              <input
                type="text"
                className="form-control"
                id="inputcvv"
                name="cardCvv"
                value={this.props.cardCvv}
                placeholder="CVV"
                maxLength="3"
                minLength="3"
                onChange={(e) => {
                  this.props.onChange(e);
                }}
                onFocus={() => {
                  this.props.onFocus();
                }}
                onBlur={() => {
                  this.props.onBlur();
                }}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            id="submitButton"
            className="btn btn-block btn-lg form-cta"
          >
            <div className="submit-text">
              <span className="plus"></span>
            </div>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
