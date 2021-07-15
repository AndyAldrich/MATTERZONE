import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    position: "relative",
    zIndex: "3",
    background: "linear-gradient(#1f1f1f, #000000)",
    backgroundColor: "#1f1f1f",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    background: "linear-gradient(#1f1f1f, #000000)",
    backgroundColor: "#1f1f1f",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
