import React, { Component } from 'react';
import { Button, Input } from '../common';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      inputValue: '',
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked,
    });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { isClicked, inputValue } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div className="App">
        <Button
          label="Button"
          handleClick={handleClick}
          className={isClicked ? 'button button--active' : 'button'}
        />
        <br />
        <Input
          className="input input__text"
          value={inputValue}
          type="text"
          name="input"
          handleChange={handleChange}
          placeholder="This is a text input"
        />
        <br />
        {inputValue}
      </div>
    );
  }
}

export { App };
