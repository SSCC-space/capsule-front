import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Draggable from 'react-draggable';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import PostIt from './components/main/postit'




function App() {
  // const context = React.useContext(AppContext)
  const [isMoveable, setIsMoveable] = React.useState<boolean>(false);
  const {innerWidth: width, innerHeight: height} = window;

  // const onDrag = () => {
  //   setIsMoveable(true)
  //   // updateXarrow()

  // }
  // const onStop = () => {
  //   setIsMoveable(false)
  //   // updateXarrow()

  // }

  const postIt = {
    backgroundColor : "#8CA0E8",
    // axis : [1, 1],
    // rotate: 1
  }

  return (
    <div className="App">
      <TransformWrapper
        initialScale={1}
        disabled={isMoveable}
        minScale={.5}
        maxScale={3}
        limitToBounds={false}
        pinch={{step: 5}}
        >
        <TransformComponent contentClass='main' wrapperStyle={{ height: height, width: width }}>
          <PostIt contents={postIt} />
          {/* <Draggable onDrag={onDrag} onStop={onStop}>
              <div className='table' id="안녕" style={{left:100,top:100}}>
                  <div className='table-name'>
                      <h3>오브젝트 00</h3>
                  </div>
              </div>
          </Draggable> */}
          {/* <div style={
            {
              left: 100,
              top: 500,
              position: 'absolute',

              width: 300,
            height: 300,
            backgroundColor: "#8CA0E8",
            
            display: 'flex',
            alignItems: 'center',

            boxSizing: 'border-box',
            padding: 30,
            textAlign: 'center',
            transform: "rotate(1deg)"}}>
              테스트 포스트잇입니다??adasd
            </div><div style={
            {width: 300,
            height: 300,
            backgroundColor: "#FED130",
            
            display: 'flex',
            alignItems: 'center',

            boxSizing: 'border-box',
            padding: 30,
            textAlign: 'center',
            transform: "rotate(-5deg)"}}>
              우와 확률과 통계 하나도 모르겠다!!
            </div> */}
          {/* <div style={{left: 100, top:100}}>
            <h1>오브젝트 01</h1>
          </div>
          <div style={{left:0, top:300, position: "absolute", transform: "rotate(-45deg)"}}>
            <h1>오브젝트 02</h1>
          </div> */}
 
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
} 

export default App;
