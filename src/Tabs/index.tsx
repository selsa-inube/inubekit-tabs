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
import { StyledTabs, StyledContainer } from "./styles";

interface ITabs {
  tabs: ITab[];
  type?: Types;
  onChange: (id: string) => void;
  selectedTab: string;
  showChevrons?: boolean;
}

const Tabs = (props: ITabs) => {
  const {
    tabs,
    type = "tabs",
    onChange,
    selectedTab,
    showChevrons = false,
  } = props;
  const [displayList, setDisplayList] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  const findTabIndex = (id: string) => tabs.findIndex((tab) => tab.id === id);

  const handleChevronClick = (direction: "left" | "right") => {
    const currentIndex = findTabIndex(selectedTab);
    if (currentIndex !== -1) {
      let newIndex = currentIndex;
      do {
        newIndex += direction === "left" ? -1 : 1;
        if (newIndex < 0 || newIndex >= tabs.length) {
          return;
        }
      } while (tabs[newIndex].disabled);
      onChange(tabs[newIndex].id);

      setTimeout(() => {
        const container = tabsContainerRef.current;
        if (container) {
          const tabElements = container.querySelectorAll("li");
          if (tabElements.length > newIndex) {
            const newTabElement = tabElements[newIndex];
            const scrollLeftToTab = newTabElement.offsetLeft;
            const tabWidth = newTabElement.offsetWidth;
            const containerWidth = container.offsetWidth;

            let newScrollPosition;

            if (direction === "left") {
              newScrollPosition =
                scrollLeftToTab - containerWidth / 2 + tabWidth / 2;
            } else {
              newScrollPosition =
                scrollLeftToTab - containerWidth / 2 - tabWidth / 2 + tabWidth;
            }
            container.scrollTo({
              left: Math.max(
                0,
                Math.min(
                  newScrollPosition,
                  container.scrollWidth - containerWidth,
                ),
              ),
              behavior: "smooth",
            });
          }
        }
      }, 0);
    }
  };

  const interceptOnChange = (e: string) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const handleInsideClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.closest("li")?.getAttribute("id");
    if (id) {
      interceptOnChange(id);
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
          interceptOnChange(id);
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
    <StyledContainer onClick={handleTabClick}>
      <Stack justifyContent="space-between" gap="12px">
        {showChevrons && type === "tabs" && (
          <Icon
            variant="filled"
            icon={<MdChevronLeft />}
            appearance="light"
            cursorHover
            onClick={() => handleChevronClick("left")}
          />
        )}
        <StyledTabs ref={tabsContainerRef} onClick={handleTabClick}>
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
            onClick={() => handleChevronClick("right")}
          />
        )}
      </Stack>
    </StyledContainer>
  );
};

export { Tabs };
export type { ITabs };
