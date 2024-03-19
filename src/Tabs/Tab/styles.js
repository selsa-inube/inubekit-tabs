import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ appearance, selected, disabled, theme }) =>
    appearance &&
    selected &&
    !disabled &&
    `4px solid ${theme?.text?.[appearance]?.content.color.regular || inube.text[appearance].content.color.regular}`};

  & > p {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export { StyledTab };
