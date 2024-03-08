import { Text } from "@inubekit/text";
import { StyledTab } from "./styles";

interface ITab {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
}

const Tab = (props: ITab) => {
  const { disabled = false, selected = false, id, label } = props;

  return (
    <StyledTab disabled={disabled} selected={selected} id={id}>
      <Text
        type="label"
        size="medium"
        appearance={selected ? "primary" : "dark"}
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
