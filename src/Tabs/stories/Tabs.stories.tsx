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
    { id: "payroll1", disabled: false, label: "Payroll" },
    { id: "payroll2", disabled: false, label: "Payroll" },
    { id: "payroll3", disabled: false, label: "Payroll" },
    { id: "payroll4", disabled: false, label: "Payroll" },
    { id: "payroll5", disabled: false, label: "Payroll" },
    { id: "payroll6", disabled: false, label: "Payroll" },
    { id: "payroll7", disabled: false, label: "Payroll" },
    { id: "payroll8", disabled: false, label: "Payroll" },
    { id: "payroll9", disabled: false, label: "Payroll" },
    { id: "payroll10", disabled: false, label: "Payroll" },
    { id: "payroll11", disabled: false, label: "Payroll" },
    { id: "payroll12", disabled: false, label: "Payroll" },
    { id: "payroll13", disabled: false, label: "Payroll" },
  ],
  selectedTab: "generalInformation",
  type: "tabs",
  showChevrons: true,
};

export { Default };
export default story;
