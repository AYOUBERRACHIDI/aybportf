import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const grow = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.3); opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ darkMode }) =>
    darkMode
      ? "radial-gradient(circle at center, #0f172a, #020617)"
      : "radial-gradient(circle at center, #ffffff, #f3f4f6)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  animation: ${({ done }) => done && fadeOut} 0.6s ease forwards;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ darkMode }) =>
    darkMode ? "rgba(255, 215, 0, 0.2)" : "rgba(243, 119, 8, 0.2)"};
  animation: ${grow} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  left: ${({ left }) => left}%;
  bottom: ${({ bottom }) => bottom}%;
  filter: blur(1.5px);
  transform-origin: center center;
`;

const ProgressWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  height: 10px;
  background: ${({ darkMode }) =>
    darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0,0,0,0.08)"};
  border-radius: 999px;
  overflow: hidden;
  box-shadow: 0 0 15px
    ${({ darkMode }) =>
      darkMode
        ? "rgba(255,215,0,0.4)"
        : "rgba(243,119,8,0.3)"};
  position: relative;
  z-index: 2;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(90deg, #FFD700, #FFA500)"
      : "linear-gradient(90deg, #F37708, #FFB347)"};
  border-radius: 999px;
  transition: width 0.2s ease-in-out;
  box-shadow: 0 0 12px
    ${({ darkMode }) =>
      darkMode
        ? "rgba(255,215,0,0.6)"
        : "rgba(243,119,8,0.6)"};
`;

const Percentage = styled.span`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ darkMode }) => (darkMode ? "#FFD700" : "#F37708")};
  z-index: 2;
`;

const LoadingText = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ darkMode }) => (darkMode ? "#FFD700" : "#F37708")};
  letter-spacing: 3px;
  z-index: 2;
  animation: blink 1.5s infinite;

  @keyframes blink {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.3; }
  }
`;

const Loader = ({ darkMode, onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 2;
      if (value > 100) {
        clearInterval(interval);
        setDone(true);
        onFinish(); 
      } else {
        setProgress(value);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  const circles = Array.from({ length: 12 }).map((_, i) => ({
    size: Math.random() * 10 + 5, 
    left: Math.random() * 100,
    bottom: Math.random() * 100,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 2,
  }));

  return (
    <LoaderContainer darkMode={darkMode} done={done}>
      {circles.map((c, i) => (
        <Circle key={i} {...c} darkMode={darkMode} />
      ))}

      <ProgressWrapper darkMode={darkMode}>
        <ProgressBar darkMode={darkMode} progress={progress} />
      </ProgressWrapper>
      <Percentage darkMode={darkMode}>{progress}%</Percentage>
      <LoadingText darkMode={darkMode}>Loading...</LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
