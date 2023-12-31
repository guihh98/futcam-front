import styled from "styled-components";

export const ButtonContainer = styled.div`

button {
  background-color: #0b7ea2;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: 'Anton', sans-serif;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  letter-spacing: 2px;
}

  button:focus {
    outline: 0;
  }

  button:after {
    content: '';
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  button:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    button {
      padding: .75rem 3rem;
      font-size: 1.25rem;
    }
  }
`
