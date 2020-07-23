import styled from "styled-components";

export const BrandContainer = styled.div`
  grid-column: col-start 2 / col-end 9;
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: repeat(4, 1fr);

  img {
    max-width: 100%;
  }
`;
