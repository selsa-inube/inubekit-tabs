import { useState, useRef, useEffect } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

import { OptionItem, OptionList } from "@inubekit/select";
import { Stack } from "@inubekit/stack";
import { Icon } from "@inubekit/icon";

import { Tab, ITab } from "./Tab";
import { Types } from "./props";
import { StyledContainer, StyledTabs } from "./styles";
import {
  handleChevronClick,
  handleInsideClick,
  handleOutsideClick,
  handleTabClick,
} from "./utils";

interface ITabs {
  tabs: ITab[];
  type?: Types;
  onChange: (id: string) => void;
  selectedTab: string;
  showChevrons?: boolean;
}

const Tabs = ({
  tabs,
  type = "tabs",
  selectedTab,
  onChange,
  showChevrons = false,
}: ITabs) => {
  const [displayList, setDisplayList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const helperHandleChevron = (direction: "left" | "right") => {
    handleChevronClick(direction, tabsContainerRef);
  };

  const handleInsideClickWithState = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInsideClick(e, onChange, setDisplayList);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) =>
      handleOutsideClick(e, wrapperRef, setDisplayList);
    document.addEventListener("mousedown", handleOutside);

    return () => document.removeEventListener("mousedown", handleOutside);
  }, [wrapperRef, setDisplayList]);

  if (type === "select") {
    return (
      <div ref={wrapperRef}>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <Icon
              spacing="wide"
              onClick={() => setDisplayList(!displayList)}
              appearance="dark"
              icon={<MdKeyboardArrowDown />}
            />
            <Tab
              key={selectedTab}
              selected={true}
              id={selectedTab}
              label={tabs.find((tab) => tab.id === selectedTab)!.label}
            />
          </Stack>
        </StyledTabs>
        {displayList && (
          <OptionList onClick={handleInsideClickWithState}>
            {tabs.map((tab) => (
              <OptionItem key={tab.id} id={tab.id} label={tab.label} />
            ))}
          </OptionList>
        )}
      </div>
    );
  }

  return (
    <StyledContainer>
      <Stack justifyContent="space-between" gap="12px">
        {showChevrons && type === "tabs" && (
          <Icon
            variant="filled"
            icon={<MdChevronLeft />}
            appearance="light"
            cursorHover
            onClick={() => helperHandleChevron("left")}
          />
        )}
        <StyledTabs ref={tabsContainerRef} onClick={handleTabClick(onChange)}>
          <Stack gap="24px">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                disabled={tab.disabled}
                selected={tab.id === selectedTab}
                id={tab.id}
                label={tab.label}
              />
            ))}
          </Stack>
        </StyledTabs>
        {showChevrons && type === "tabs" && (
          <Icon
            variant="filled"
            icon={<MdChevronRight />}
            appearance="light"
            cursorHover
            onClick={() => helperHandleChevron("right")}
          />
        )}
      </Stack>
    </StyledContainer>
  );
};

export { Tabs };
export type { ITabs };
