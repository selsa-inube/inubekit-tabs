import { Text } from "@inubekit/text";
import { StyledTab } from "./styles";
import { inube } from "@inubekit/foundations";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
}

const Tab = (props: ITab) => {
  const { disabled = false, selected = false, id, label } = props;
  const theme: typeof inube = useContext(ThemeContext);
  const selectedAppearance =
    theme?.tabs?.content?.appearance?.selected ||
    inube.tabs.content.appearance.selected;

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
          selected ? (selectedAppearance as keyof typeof inube.text) : "gray"
        }
        disabled={disabled}
        textAlign="start"
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
export type { ITab };
