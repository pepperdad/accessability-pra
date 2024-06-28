import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <img
          style={{ width: "300px" }}
          src="public/assets/mobile/image1.jpeg"
        />

        <img
          style={{ width: "300px" }}
          src="public/assets/mobile/image2.png"
          alt="cuti webbi"
        />

        <img
          style={{ width: "300px" }}
          src="public/assets/mobile/image3.jpeg"
          alt=""
        />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <button>submit</button>
        <button aria-label="user info edit">submit</button>
      </div>
    </>
  );
}

export default App;
