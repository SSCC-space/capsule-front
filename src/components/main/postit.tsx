import React, { Component } from 'react'


type propsComp = {
  backgroundColor: string,
  // axis: number[],
  // rotate: number,
}

const postIt = (props: any) => {
  const { contents } = props;
  // console.log(contents)
  return (
    // <div style={styles.postit}>12345</div>
    <div style={styles.postit}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
 );
};

export default postIt;


// export default function postit(comp: any) {
//   return (
//     <div style={styles.postit}>
//       안녕하세요~
//       `${comp}`
//     </div>
//   )
// }

const styles = {
  postit: {
    width: 200, height: 200, // postit size

    top: 500, left: 100, // axis = (500, 100)
    position: 'absolute',

    backgroundColor: "#FED130", // color
    
    display: 'flex', alignItems: 'center', // vertical center
    justifyContent: 'center',

    padding: 30, 
    boxSizing: 'border-box', // padding set
    textAlign: 'center', // horizental center

    fontFamily: "Tnter",
    fontWeight: 'bold',
    fontSize: 15,
    

    
    transform: "rotate(1deg)" // rotations
  } as React.CSSProperties,
}