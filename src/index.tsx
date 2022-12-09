// react
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// mui
import { ThemeProvider } from "@mui/material";
import { baseTheme } from "./mui/baseTheme";
// components
import App from "./App";
// style
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={baseTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
