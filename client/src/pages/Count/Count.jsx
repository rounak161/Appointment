import React, { useState, useEffect, useRef } from 'react';
import './Count.css';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        } else {
          resetCounting();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    let start = 0;
    const duration = 2000; // Duration of the animation in milliseconds
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 50);
  };

  const resetCounting = () => {
    setCount(0);
  };

  return (
    <div className="counter" ref={counterRef}>
      <div className="count">{count} +</div>
      <div className="label">{label}</div>
    </div>
  );
};

const Count = () => {
  return (
    <div className="count-container">
      <Counter end={1000} label="Satisfied Patients" />
      <Counter end={250} label="Verified Doctors" />
      <Counter end={75} label="Specialist Doctors" />
    </div>
  );
};

export default Count;
