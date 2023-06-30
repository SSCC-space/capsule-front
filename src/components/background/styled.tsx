import styled from "styled-components";
// import { TransformComponent } from 'react-zoom-pan-pinch';

// https://velog.io/@altjsvnf/TS-TypeScript%EC%97%90%EC%84%9C-Styled-component-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// https://velog.io/@lifeisbeautiful/React-%ED%8F%B0%ED%8A%B8%EC%9E%85%ED%98%80%EB%B3%B4%EA%B8%B0


interface BackgroundContainer {
//   year: number;
//   season: string;
  font: string;
  main_design: string;
}

const YearDesign = styled.div<BackgroundContainer>`
  color: ${(props) => (props.font)};
`;


// .login_title_text {
//   color: white;
//   font-size: 25pt;
//   font-family: "cookie";  //font-family : app.js에서 선언한 이름을 적어준다//
// }

//   color: black;
const BGStyle = styled.div`
    background-color: #FF00FF;
    font-fmaily: 'crab';
`;

        // width: 200, height: 200, // postit size

        // top: 500, left: 100, // axis = (500, 100)
        // position: 'absolute',

        // backgroundColor: "#FED130", // color
        
        // display: 'flex', alignItems: 'center', // vertical center
        // justifyContent: 'center',

        // padding: 30, 
        // boxSizing: 'border-box', // padding set
        // textAlign: 'center', // horizental center

        // fontFamily: "Inter",
        // fontWeight: 'bold',
        // fontSize: 15,

export default function Main() {
  return <BGStyle>안녕하세욥욥욥</BGStyle>;
}

// export default BGStyle;