import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      usedChars: 0,
      value: ''
    };
  }

  countCharachters = (e) => {
    this.setState({
      usedChars: e.target.value.length,
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.countCharachters}/>
        <br />
        <u>Characters left: {this.state.maxChars - this.state.usedChars} </u>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default TwitterMessage;
