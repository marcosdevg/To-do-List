import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div.attrs(({ done }: ContainerProps) => ({
  done,
}))`
  display: flex;
  justify-content: space-between;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
  }
  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
  }

  label {
    color: #ccc;
    text-decoration: ${(props) => (props.done ? "line-through" : "initial")};
  }

  .imagem-svg {
    cursor: pointer;
  }
`;
