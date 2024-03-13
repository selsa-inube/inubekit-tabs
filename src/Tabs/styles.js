import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  & > div {
    width: fit-content;
    ${({ type }) =>
      type === "select" &&
      `
        & > li > p {
          position: relative;
          top: 0.5rem;
        }
      `}
  }
  & > div > ul {
    position: absolute;
    z-index: 1;
  }
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  padding: 0 16px;
`;

export { StyledTabs, StyledContainer };
