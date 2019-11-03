import React from 'react'
import logo from '../images/logo.png';
import logowhite from '../images/logowhite.png';
import './change-logo.css';

class ChangeLogo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: logowhite
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: logo
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: logowhite
    });
  }

  render() {
    return (
      <figure className="logo">
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt='inteRX'/>
      </figure>
    );
  }

}

ChangeLogo.propTypes = {
}

ChangeLogo.defaultProps = {
}

export default ChangeLogo;