import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ selected, disabled, theme }) =>
    selected &&
    !disabled &&
    `4px solid ${theme?.palette?.blue?.B400 || inube.palette.blue.B400}`};

  & > p {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export { StyledTab };
