import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { OptionItem, OptionList } from "@inubekit/select";
import { Stack } from "@inubekit/stack";
import { Icon } from "@inubekit/icon";

import { Tab, ITab } from "./Tab";
import { StyledTabs } from "./styles";

interface ITabs {
  tabs: ITab[];
  type?: boolean;
  onChange: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({ tabs, type, selectedTab, onChange }: ITabs) => {
  const [displayList, setDisplayList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleInsideClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.closest("li")?.getAttribute("id");
    if (id) {
      onChange(id);
      setDisplayList(false);
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setDisplayList(false);
    }
  };

  const handleTabClick = (e: React.MouseEvent) => {
    const targetElement = e.target;
    if (targetElement instanceof HTMLElement) {
      const tabElement = targetElement.closest("[id]");
      if (tabElement && tabElement.tagName.toLowerCase() === "li") {
        const id = tabElement.getAttribute("id");
        if (id && tabElement.getAttribute("disabled") === null) {
          onChange(id);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (type === true) {
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
          <OptionList onClick={handleInsideClick}>
            {tabs.map((tab) => (
              <OptionItem key={tab.id} id={tab.id} label={tab.label} />
            ))}
          </OptionList>
        )}
      </div>
    );
  }

  return (
    <StyledTabs onClick={handleTabClick}>
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
  );
};

export { Tabs };
export type { ITabs };
