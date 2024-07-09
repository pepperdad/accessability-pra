import { useState } from "react";
import "./App.css";

function App() {
  const [redirected, setRedirected] = useState(false);

  const handleRedirect = (e) => {
    e.preventDefault();
    const redirectUrl =
      "supertoss://send?bank=농협&accountNo=3561202376833&origin=linkgen&amount=10000&msg=안녕";

    // 하이퍼링크로 이동
    window.location.href = redirectUrl;

    setTimeout(() => {
      setRedirected(true);
    }, 1000);
  };

  if (redirected) {
    // 리디렉션 후 돌아왔을 때 보여줄 페이지
    return (
      <div>
        <h1>리디렉션 후 페이지</h1>
        <p>토스로 송금 후 돌아왔습니다.</p>
      </div>
    );
  }

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
        {/* <img src="/assets/image1.jpeg" />

        <img src="/assets/image2.png" alt="귀여운 화랑이" />

        <img src="/assets/image3.jpeg" alt="" />
      </div>

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
            <img src="/assets/logo.png" alt="" />
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
        </button> */}

        {/* <button>
          <a href="tel:01086273460">01086273460</a>
        </button> */}

        <input type="text" />
        <a href="https://www.naver.com">약관</a>

        <button onClick={handleRedirect}>토스로 송금하기</button>
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
