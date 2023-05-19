import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import PostIt from './components/postit/main'

function App() {
  const [isMoveable, setIsMoveable] = React.useState<boolean>(false);
  const {innerWidth: width, innerHeight: height} = window;

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
        pinch={{step: 5}} >

        <TransformComponent contentClass='main' wrapperStyle={{ height: height, width: width }}>
          <PostIt contents={postIt} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
} 

export default App;
