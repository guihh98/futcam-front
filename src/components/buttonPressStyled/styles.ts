import styled from "styled-components";

interface ButtonProps {
  maincolor?: string
  presscolor?: string
  shadowcolor?: string
  fontSize?: string
}

export const ButtonStyle = styled.div<ButtonProps>`
  position: relative;
  display: inline-block;
  margin: 20px;

  a {
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: ${(props) => props.fontSize || '36px'};
    text-align: center;
    text-decoration: none;
    background-color: ${(props) => props.maincolor || '#053d4b'};
    display: block;
    position: relative;
    padding: 20px 40px;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);

    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 ${(props) => props.shadowcolor || '#05323D'};
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 ${(props) => props.shadowcolor || '#05323D'};
    box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 ${(props) => props.shadowcolor || '#05323D'};

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  a:active {
    top: 10px;
    background-color: ${(props) => props.presscolor || '#2DB9EA'};

    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 ${(props) => props.shadowcolor || '#05323D'};
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3pxpx 0 ${(props) => props.shadowcolor || '#05323D'};
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 ${(props) => props.shadowcolor || '#05323D'};
  }

  :after {
    content: "";
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2b1800;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
`;
