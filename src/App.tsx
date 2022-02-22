import Card from "components/Card";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [iShowPreview, setIShowPreview] = useState<boolean>(false);
  return (
    <main className="container-layout">
      <Card
        iShowPreview={iShowPreview}
        setIShowPreview={setIShowPreview}
        author="Wahyu Fatur Rizki"
        timeLeft="3 days left"
        value="0.041"
        name="Equilibrium #3429"
        desc="Our Equilibrium collection promotes balance and calm."
      />
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/wahyu-fatur-rizky"
            target="_blank"
          >
            Wahyu Fatur Rizki
          </a>
          .
        </div>
      </footer>
    </main>
  );
}

export default App;
