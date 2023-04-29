import theme from "../Theme";

const styles = {
  main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
  },
  cancelButton: {
    background: theme.palette.primary.neutral,
    color: theme.typography.lightColor,
    width: "auto",
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "8px",
    margin: "0px 8px",
    fontFamily: theme.typography.fontFamily,
  },
  options: {
    display: "flex",
    width: "100%",
    padding: "10px 0px",
    justifyContent: "right",
  },
  okButton: {
    background: theme.palette.primary.button,
    color: theme.typography.lightColor,
    width: "auto",
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: "8px",
    margin: "0px 8px",
    fontFamily: theme.typography.fontFamily,
  },
};

export default styles;
