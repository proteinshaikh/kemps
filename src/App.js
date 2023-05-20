import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Animated, CSSTransitionGroup, keyframes } from "react-transition-group";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (name && email && message) {
      fetch("https://kempsdigital.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Your message has been sent!");
          } else {
            alert("An error occurred. Please try again later.");
          }
        });
    }
  }, [name, email, message]);

  return (
    <div>
      <h1>Kemp's Digital</h1>
      <h2>IT Consulting</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <LandingPage />
    </div>
  );
}

const LandingPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div>
      <CSSTransitionGroup
        in={isAnimated}
        transitionName="landing-page"
        transitionEnterDuration={1000}
        transitionExitDuration={1000}
      >
        <div className="landing-page-container">
          <div className="landing-page-header">
            <h1>Kemp's Digital</h1>
            <h2>IT Consulting</h2>
          </div>
          <div className="landing-page-content">
            <p>
              Kemp's Digital is a leading IT consulting firm that provides innovative solutions to businesses of all sizes. We have a team of experienced professionals who are experts in a variety of technologies, including cloud computing, cybersecurity, and data analytics. We can help you improve your business operations, increase your security, and make better decisions with data.
            </p>
            <button type="button" onClick={() => setIsAnimated(false)}>
              Learn More
            </button>
          </div>
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default App;
