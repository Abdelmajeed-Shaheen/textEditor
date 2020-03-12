import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    fontcolor: "black",
    bold: false,
    italic: false,
    underline: false
  };

  changeFontColor = color => {
    this.setState({ fontcolor: color });
  };

  changeFontStyle = style => {
    const statevalue = !this.state[style];
    this.setState({ [style]: statevalue });
  };

  render() {
    const stylings = ["bold", "italic", "underline"];
    const colors = ["yellow", "blue", "red", "black", "purple"];
    const buttonStuling = [];
    const stylingBoxes = stylings.map(style => {
      return (
        <button
          onClick={() => this.changeFontStyle(style)}
          className={
            this.state[style]
              ? "btn btn-success mr-2"
              : "btn btn-outline-primary mr-2"
          }
          style={styles[style]}
          key={style}
        >
          {style}
        </button>
      );
    });

    const colorBoxes = colors.map(color => {
      return (
        <button
          onClick={() => this.changeFontColor(color)}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.fontcolor,
            fontWeight: this.state.bold && "bold",
            fontStyle: this.state.italic && "italic",
            textDecorationLine: this.state.underline && "underline"
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
