import React from 'react';
// import PropTypes from 'prop-types';
import './Iframe.scss';

const propTypes = {};
const defaultProps = {};

class Iframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', (e) => {
      console.log(e.target);
    })
  }

  handleChange(e) {
    this.setState({ url: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.url} onChange={this.handleChange} />
        <embed
          className="Iframe__webview"
          ref={(ref) => { this.iframeRef = ref; }}
          src="https://www.naver.com"
          frameBorder="0"
        />
      </div>
    );
  }
}

Iframe.propTypes = propTypes;
Iframe.defaultProps = defaultProps;

export default Iframe;
