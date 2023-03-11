import styled from "styled-components";

export const InspectContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Input = styled.input.attrs({ type: "text", autoComplete: "off" })`
  border: 1px solid rgba(0, 0, 0, 0.75);
  padding-left: 1rem;
  width: 30rem;
  height: 4rem;
  background: #e1f1ff;
`;
