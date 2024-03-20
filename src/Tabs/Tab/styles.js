import { Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import styled from "styled-components";

const StyledTab = styled.li`
  width: fit-content;
  user-select: none;
  list-style-type: none;
  border-bottom: ${({ selected, disabled, theme }) =>
    selected &&
    !disabled &&
    `4px solid ${
      theme?.text?.[theme?.tabs?.content?.appearance?.selected]?.content.color
        .regular ||
      inube.text[inube.tabs.content.appearance.selected].content.color.regular
    }`};

  & > p {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export { StyledTab };
