import React from "react";
import styled from "styled-components";

function Recommends() {
  return (
    <Container>
      Some Recommends
      <Contents>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Contents>
    </Container>
  );
}
const Container = styled.div`
  padding: 0, 0, 45px;
`;
const Contents = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
export default Recommends;
