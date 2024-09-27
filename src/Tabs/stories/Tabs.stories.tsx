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
    { id: "Savings products", disabled: false, label: "Savings products" },
    { id: "Credit products", disabled: false, label: "Credit products" },
    { id: "Purchase products", disabled: false, label: "Purchase products" },
    { id: "Credit lines", disabled: false, label: "Credit lines" },
    { id: "Branch offices", disabled: false, label: "Branch offices" },
    {
      id: "Banking correspondent",
      disabled: false,
      label: "Banking correspondent",
    },
  ],
  selectedTab: "generalInformation",
  scroll: true,
};

export { Default };
export default story;
