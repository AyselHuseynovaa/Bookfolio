import React, { Component, createContext } from "react";
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: true,
    dark: {
      bg: "#222529",
      txt: "#D65F5f",
      hover: "rgba(231 ,76,60,0.8)",
    },
    light: { bg: "#fff", txt: "#222529", hover: "rgba(254, 209, 54, 0.8" },
  };

  changeTheme = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
