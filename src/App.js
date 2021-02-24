import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class WhiteSquare extends React.Component {
  render() {
    return <button className="white-square">{this.props.value}</button>;
  }
}
class BlackSquare extends React.Component {
  render() {
    return <button className="black-square">{this.props.value}</button>;
  }
}
class Board extends React.Component {
  renderWhiteSquare(i) {
    return <WhiteSquare />;
  }
  renderBlackSquare(i) {
    return <BlackSquare />;
  }
  renderEvenRow(i) {
    return (
      <div className="board-row">
        {this.renderWhiteSquare(i)}
        {this.renderBlackSquare(i)}
        {this.renderWhiteSquare(i + 1)}
        {this.renderBlackSquare(i + 1)}
        {this.renderWhiteSquare(i + 2)}
        {this.renderBlackSquare(i + 2)}
        {this.renderWhiteSquare(i + 3)}
        {this.renderBlackSquare(i + 3)}
      </div>
    );
  }

  renderOddRow(i) {
    return (
      <div className="board-row">
        {this.renderBlackSquare(i)}
        {this.renderWhiteSquare(i)}
        {this.renderBlackSquare(i + 1)}
        {this.renderWhiteSquare(i + 1)}
        {this.renderBlackSquare(i + 2)}
        {this.renderWhiteSquare(i + 2)}
        {this.renderBlackSquare(i + 3)}
        {this.renderWhiteSquare(i + 3)}
      </div>
    );
  }
  render() {
    return (
      <div className="board-container">
        {this.renderEvenRow(0)}
        {this.renderOddRow(0)}
        {this.renderEvenRow(1)}
        {this.renderOddRow(1)}
        {this.renderEvenRow(2)}
        {this.renderOddRow(2)}
        {this.renderEvenRow(3)}
        {this.renderOddRow(3)}
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
