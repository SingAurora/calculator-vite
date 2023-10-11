import ParticlesBg from "particles-bg";
import List from "./List";
// import MouseParticles from 'react-mouse-particles'
import { useState, useEffect } from "react";

function App() {
  // 创建一个状态来存储窗口的宽度
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 创建一个事件处理程序，用于更新窗口宽度的状态
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  // 使用useEffect在组件挂载后添加窗口大小变化的事件监听器
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // 在组件卸载时移除事件监听器，以避免内存泄漏
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]); // 空数组作为第二个参数表示只在组件挂载和卸载时运行一次
  return (
    <>
      {/*<Calculator/>*/}
      <List />
      <ParticlesBg type="circle" bg={true} />
      {/*<MouseParticles g={1} color="random" cull="col,image-wrapper" life="6" />*/}
    </>
  );
}

export default App;
