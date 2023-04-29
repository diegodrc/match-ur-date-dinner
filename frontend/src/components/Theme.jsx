import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4f2f1",
      button: "#00b0cf",
      alert: "#faad14",
      success: "#52c41a",
      error: "#f5222d",
      neutral: "#bfbfbf",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    darkColor: "#000",
    lightColor: "#fff",
  },
  spacing: 8,
});

export default theme;
