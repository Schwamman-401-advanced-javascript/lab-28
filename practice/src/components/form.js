import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  preventDefault(e) {
    e.preventDefault();
  }

  inputChange = (e) => {
    let input = e.target.value;
    this.props.do(input);
  }

  render() {
    return (
      <> 
        <form onSubmit={this.preventDefault}>
          <input onChange={this.inputChange}></input>
        </form>
      </>
    );
  }

}

export default Form;
