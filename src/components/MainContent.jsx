import { useEffect, useState } from "react";

const MainContent = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setCount((counter) => counter + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <main>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get another advice</button>

      <p>
        You have read <strong>{count}</strong> pieces of advice.
      </p>
    </main>
  );
};

export default MainContent;
