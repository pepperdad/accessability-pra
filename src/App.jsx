import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "200px", height: "220px" }}
          src="/assets/image1.jpeg"
        />

        <img
          style={{ width: "200px", height: "220px" }}
          src="/assets/image2.png"
          alt="귀여운 화랑이"
        />

        <img
          style={{ width: "200px", height: "220px" }}
          src="/assets/image3.jpeg"
          alt=""
        />
      </div>

      {/* <div style={{ display: "flex", gap: "20px" }}>
        <button>submit</button>
        <button>제출</button>
        <button aria-label="user info edit">submit</button>
        <button aria-label="유저 정보 수정">submit</button>
      </div> */}
    </>
  );
}

export default App;
