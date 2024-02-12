import { ThemeProvider } from "styled-components";

import { presente } from "@inubekit/foundations";

import { Tabs, ITabsProps } from "..";
import { TabsController } from "./TabsController";
import { props, parameters } from "../props";

const story = {
  title: "navigation/Tabs",
  components: [Tabs],
  parameters,
  argTypes: props,
};

export const Default = (args: ITabsProps) => <TabsController {...args} />;
Default.args = {
  tabs: [
    {
      id: "generalInformation",
      disabled: false,
      label: "General Information",
    },
    { id: "branches", disabled: false, label: "Branches" },
    { id: "projects", disabled: false, label: "Projects" },
    { id: "events", disabled: true, label: "Events" },
    { id: "aidBudget", disabled: false, label: "Aid budget units" },
    { id: "payroll", disabled: false, label: "Payroll" },
  ],
  selectedTab: "generalInformation",
  type: "tabs",
};

const theme = {
  ...presente,
};

export const Themed = (args: ITabsProps) => (
  <ThemeProvider theme={theme}>
    <TabsController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};
export default story;
