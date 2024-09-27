import { Text, TextTokens } from "@inubekit/text";
import { StyledTab } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "../Tokens/tokens";

interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
}

const Tab = (props: ITab) => {
  const { disabled = false, selected = false, id, label } = props;
  const theme = useContext(ThemeContext) as { tabs: typeof tokens };
  const selectedAppearance =
    theme?.tabs?.content?.appearance?.selected ||
    tokens.content.appearance.selected;

  return (
    <StyledTab
      disabled={disabled}
      selected={selected}
      id={id}
      appearance={selectedAppearance}
    >
      <Text
        type="label"
        size="medium"
        appearance={
          selected ? (selectedAppearance as keyof typeof TextTokens) : "gray"
        }
        disabled={disabled}
        textAlign="start"
        weight="bold"
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
export type { ITab };
