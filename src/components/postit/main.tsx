import React, { Component } from 'react'

const postIt = (props: any) => {
    // const { contents } = props;
    // 추후 props로 입력 받아서 데이터 결정해야 됨

    // 색상 값 -> style 적용
    
    
    

    return (
        <div style={styles.postit}>
            // 글자가 나오는 부분
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
 );
};

function changeColor(colornumber : number): import("csstype").Property.BackgroundColor | undefined {

    switch (colornumber){
        case 0 :
            return "#faee82"; //yellow
            break;

        case 1 :
            return "#6edbff"; //blue
            break;

        case 2 :
            return "#d1a6ff"; //purple
            break;  
    }

    throw new Error('Function not implemented.');
}

export default postIt;

const styles = {
    postit: {
        
        width: 200, height: 200, // postit size

        top: 500, left: 100, // axis = (500, 100)
        position: 'absolute',

        //backgroundColor: "#FED130", 
        backgroundColor : changeColor(2), // color

        display: 'flex', alignItems: 'center', // vertical center
        justifyContent: 'center',

        padding: 30, 
        boxSizing: 'border-box', // padding set
        textAlign: 'center', // horizental center

        fontFamily: "Inter",
        fontWeight: 'bold',
        fontSize: 15,

        transform: "rotate(1deg)" // rotations
    } as React.CSSProperties,
}



