import { ITab } from "./Tab";
import React from "react";

type OnChangeType = (id: string) => void;

const calculateNewTabIndex = (
  tabs: ITab[],
  currentIndex: number,
  direction: "left" | "right",
): number => {
  let newIndex = currentIndex;
  do {
    newIndex += direction === "left" ? -1 : 1;
    if (newIndex < 0 || newIndex >= tabs.length) {
      return -1;
    }
  } while (tabs[newIndex].disabled);
  return newIndex;
};

const calculateScrollPosition = (
  container: HTMLElement,
  newTabIndex: number,
): number => {
  const tabElements = container.querySelectorAll("li");
  if (tabElements.length > newTabIndex) {
    const newTabElement = tabElements[newTabIndex] as HTMLElement;
    const scrollLeftToTab = newTabElement.offsetLeft;
    const tabWidth = newTabElement.offsetWidth;
    const containerWidth = container.offsetWidth;
    return scrollLeftToTab - containerWidth / 2 + tabWidth / 2;
  }
  return container.scrollLeft;
};

const smoothScrollToPosition = (
  container: HTMLElement,
  position: number,
): void => {
  container.scrollTo({
    left: position,
    behavior: "smooth",
  });
};

const handleChevronClick = (
  direction: "left" | "right",
  tabs: ITab[],
  selectedTab: string,
  onChange: (id: string) => void,
  tabsContainerRef: React.RefObject<HTMLDivElement>,
): void => {
  const currentIndex = tabs.findIndex((tab) => tab.id === selectedTab);
  if (currentIndex !== -1) {
    const newIndex = calculateNewTabIndex(tabs, currentIndex, direction);
    if (newIndex !== -1) {
      onChange(tabs[newIndex].id);
      setTimeout(() => {
        const container = tabsContainerRef.current;
        if (container) {
          const newScrollPosition = calculateScrollPosition(
            container,
            newIndex,
          );
          smoothScrollToPosition(container, newScrollPosition);
        }
      }, 0);
    }
  }
};

const interceptOnChange = (onChange: OnChangeType, e: string) => {
  try {
    onChange(e);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const handleInsideClick = (
  e: React.ChangeEvent<HTMLInputElement>,
  onChange: OnChangeType,
  setDisplayList: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const id = e.target.closest("li")?.getAttribute("id");
  if (id) {
    interceptOnChange(onChange, id);
    setDisplayList(false);
  }
};

const handleOutsideClick = (
  e: MouseEvent,
  wrapperRef: React.RefObject<HTMLDivElement>,
  setDisplayList: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
    setDisplayList(false);
  }
};

const handleTabClick = (e: React.MouseEvent, onChange: OnChangeType) => {
  const targetElement = e.target as HTMLElement;
  const tabElement = targetElement.closest("[id]") as HTMLElement;
  if (
    tabElement &&
    tabElement.tagName.toLowerCase() === "li" &&
    tabElement.getAttribute("disabled") === null
  ) {
    const id = tabElement.getAttribute("id");
    if (id) {
      interceptOnChange(onChange, id);
    }
  }
};

export {
  handleChevronClick,
  interceptOnChange,
  handleInsideClick,
  handleOutsideClick,
  handleTabClick,
};
