import React from "react";
import { useState, useRef, useEffect } from "react";

// Top 컴포넌트
import Header from "./components/section/Header";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Skill from "./components/section/Skill";
import Project from "./components/section/Project";
import Study from "./components/section/Study";
import Footer from "./components/section/Footer";

// Bottom 컴포넌트
import FullMenu from "./components/section/FullMenu";

function App() {
  // 전체메뉴 useState (Header, FullMenu)
  const [fullMenustate, setFullMenuState] = useState<boolean>(false);

  // 스크롤 useRef (About, Skill, Project)
  const scrollRef = useRef<HTMLDivElement[]>([]);

  // 스크롤 (About, Skill, Project 추적 및 클래스 추가)
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("active");
        } else {
          item.target.classList.remove("active");
        }
      });
    });

    scrollRef.current.forEach((item) => {
      observer.observe(item);
    });
  }, [scrollRef]);

  return (
    <div className="App">
      <Header setFullMenuState={setFullMenuState} />
      <Home />
      <About scrollRef={scrollRef} />
      <Skill scrollRef={scrollRef} />
      <Project scrollRef={scrollRef} />
      <Study scrollRef={scrollRef} />
      <Footer />

      <FullMenu
        fullMenustate={fullMenustate}
        setFullMenuState={setFullMenuState}
      />
    </div>
  );
}

export default App;
