import { Tabs, ITabs } from "..";
import { TabsController } from "./TabsController";
import { props, parameters } from "../props";

const story = {
  title: "navigation/Tabs",
  components: [Tabs],
  parameters,
  argTypes: props,
};

const Default = (args: ITabs) => <TabsController {...args} />;
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

export { Default };
export default story;
