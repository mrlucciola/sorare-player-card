// react
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// graphql
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// mui
import { ThemeProvider } from "@mui/material";
import { baseTheme } from "./mui/baseTheme";
// components
import App from "./App";
// style
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={baseTheme}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
