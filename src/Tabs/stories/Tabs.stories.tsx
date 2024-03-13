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
    { id: "payroll1", disabled: false, label: "Payroll1" },
    { id: "payroll2", disabled: false, label: "Payroll2" },
    { id: "payroll3", disabled: false, label: "Payroll3" },
    { id: "payroll4", disabled: false, label: "Payroll4" },
    { id: "payroll5", disabled: false, label: "Payroll5" },
    { id: "payroll6", disabled: false, label: "Payroll6" },
    { id: "payroll7", disabled: false, label: "Payroll7" },
    { id: "payroll8", disabled: false, label: "Payroll8" },
    { id: "payroll9", disabled: false, label: "Payroll9" },
    { id: "payroll10", disabled: false, label: "Payroll10" },
    { id: "payroll11", disabled: false, label: "Payroll11" },
    { id: "payroll12", disabled: false, label: "Payroll12" },
    { id: "payroll13", disabled: false, label: "Payroll13" },
  ],
  selectedTab: "generalInformation",
  type: "tabs",
  showChevrons: true,
};

export { Default };
export default story;
