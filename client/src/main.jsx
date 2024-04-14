import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-eehcv17gx82wsgbi.us.auth0.com"
     clientId="NF4M358FoGnaJcnomX6MEqvWx2uDyqO3"
     authorizationParams={{
      redirect_uri: "https://real-estate-listing-system-one.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
