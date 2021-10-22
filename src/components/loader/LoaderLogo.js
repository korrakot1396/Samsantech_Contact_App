import React from "react";
import "./LoaderLogo.css";
import GifLoader from 'react-gif-loader';

class LogoLoader extends React.Component {


  render() {
return (
  <GifLoader
      loading={true}
      imageSrc="https://i.imgur.com/Am0rbSB.gif"
      imageStyle={{width: "100vh"} , { height: "100vh"}}
      overlayBackground="rgba(0,0,0,0.5)"
  />
);
  }
}

export default LogoLoader;
