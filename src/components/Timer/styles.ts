import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  button {
    margin-top: 24px;
  }
`

export const CircularProgressbar = styled(CircularProgressbarWithChildren)`
  width: 100%;
  vertical-align: middle;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.45);
  border-radius: 50%;

  .CircularProgressbar-path {
    stroke: #f54477;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar-trail {
    stroke: #2c303f;
    stroke-linecap: round;
  }

  .CircularProgressbar-text {
    fill: #f54477;
    font-size: 20px;
    text-anchor: middle;
  }

  .CircularProgressbar-background {
    fill: #2c303f;
  }

  .CircularProgressbar-inverted .CircularProgressbar-background {
    fill: #f54477;
  }

  .CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
  }

  .CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`

export const Text = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
`
