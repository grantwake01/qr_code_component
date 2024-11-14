import React from "react";
import logo from "./assets/image-qr-code.png";
import "./App.css";
import QRCardComponent from "./components/qr/qrCard.component";

function App() {
  return (
    <div className="App">
      <QRCardComponent
        imageUrl={logo}
        title="Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </div>
  );
}

export default App;
