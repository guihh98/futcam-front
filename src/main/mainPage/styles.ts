import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CameraContainer = styled.div`
  background-color: aquamarine;
  width: 50%;
  height: 100%;
`

export const Row = styled.div`
  width: auto;
  padding: 0px 2rem;
  display: flex;
  gap: 24px;
  height: 40%;
  margin-top: 16px;
`

export const Title = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
`