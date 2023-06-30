import React from 'react';
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import PostIt from './components/postit/main2'

import BackgroundColor from './components/background/styled'

import './App.css'
// import './Background.scss'

const BGStyle = styled.div`
  background-color: red;
`;

function asdf() {
  return <BGStyle>안녕하세요</BGStyle>;
}




function App() {
  const [isMoveable, setIsMoveable] = React.useState<boolean>(false);
  const {innerWidth: width, innerHeight: height} = window;

  const postIt = {
    backgroundColor : "#8CA0E8",
    // axis : [1, 1],
    // rotate: 1
  }

  return (
    // <BackgroundColor/>

    // <div className="App">
    //   2022
    // </div>
    // <BackgroundColor></BackgroundColor>
    <div className="App">
      <TransformWrapper
        initialScale={1}
        disabled={isMoveable}
        minScale={.5}
        maxScale={3}
        limitToBounds={false}
        pinch={{step: 5}} >
        
        <TransformComponent contentClass='main' wrapperStyle={{ height: height, width: width, }}>
          
          <p className='YearDisplay'>2022</p>

          {/* <p className='YearDisplay'>여름</p> */}
          <PostIt contents={postIt} />
          <div className='Background'/>
        </TransformComponent>
        
      </TransformWrapper>
    </div>
  );
} 

export default App;
