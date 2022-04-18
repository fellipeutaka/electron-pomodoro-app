import styled from "styled-components"

export const Container = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #f54477;
  box-shadow: 5px 2px 15px 0px rgba(245, 68, 119, 0.35);
  background: none;

  color: #fff;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.7);
  }
`
