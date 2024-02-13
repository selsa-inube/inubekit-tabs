import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ $selected, $disabled, theme }) =>
    $selected &&
    !$disabled &&
    `4px solid ${
      theme?.color?.stroke?.primary?.regular ||
      inube.color.stroke.primary.regular
    }`};

  & > p {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  }
`;
