import styled from "styled-components";
import { TextTokens } from "@inubekit/text";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ appearance, disabled, selected, theme }) =>
    selected &&
    !disabled &&
    `4px solid ${
      theme?.text?.[appearance]?.content.color.regular ||
      TextTokens[appearance].content.color.regular
    }`};
  padding-bottom: 4px;
  & > p {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export { StyledTab };
