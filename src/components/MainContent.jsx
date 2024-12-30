import { useState } from "react";

const MainContent = () => {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
  }

  getAdvice();

  return (
    <main>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get another advice</button>
    </main>
  );
};

export default MainContent;
