import styled from "styled-components";

import { inube } from "@inubekit/foundations";

export const StyledTabs = styled.div`
  box-sizing: border-box;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  border-bottom: 2px solid
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  padding: ${inube.spacing.s0} ${inube.spacing.s200};

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
