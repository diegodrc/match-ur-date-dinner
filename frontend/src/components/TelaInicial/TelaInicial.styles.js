import theme from "../Theme";

const styles = {
  outer: {
    display: "flex",
    maxWidth: "fit-content",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    maxWidth: "fit-content",
    display: "block",
    width: "50%",
  },
  info: {
    fontFamily: theme.typography.fontFamily,
    padding: "50px 0px",
    fontSize: "14px",
    width: "50%",
  },
  options: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  buttons: {
    background: theme.palette.primary.button,
    color: theme.typography.lightColor,
    width: "auto",
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "8px",
    margin: "0px 8px",
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      background: theme.palette.primary.button,
    },
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    padding: "4px 0px",
    fontSize: "14px",
  },
  input: {
    fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
  },
};

export default styles;
