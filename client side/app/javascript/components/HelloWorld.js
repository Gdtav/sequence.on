import React from "react"
import PropTypes from "prop-types"
import App from "./App"
class HelloWorld extends React.Component {
  render () {
    return (
        <App/>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
