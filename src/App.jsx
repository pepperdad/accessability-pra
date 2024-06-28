import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div
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
      </div> */}

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 24px",
            backgroundColor: "white",
            paddingBottom: "20px",
          }}
        >
          <a href="/" aria-label="홈으로 돌아가기">
            <img
              src="/assets/log.png"
              style={{ width: "95px", height: "50px", padding: "8px" }}
              alt="로고"
            />
          </a>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <button>
              <img src="/assets/search.png" alt="" />
            </button>
            <button>
              <img src="/assets/menu.svg" alt="" />
            </button>
          </div>
        </div>
        <img src="/assets/dan.png" alt="" />
        <button>
          <img src="/assets/search" alt="" />
        </button>
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
