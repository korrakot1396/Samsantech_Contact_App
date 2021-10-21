import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../loader/LoaderLogo";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <LoaderLogo id="logo" />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4000);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
  }
}

export default Splash;
