import { Tab, ITab } from "../index";
import { TabController } from "./TabController";

import { props } from "../props";

const story = {
  title: "navigation/Tabs/Tab",
  components: [Tab],
  argTypes: props,
};

const Default = (args: ITab) => <TabController {...args} />;
Default.args = {
  id: "thisIsAnId",
  disabled: false,
  label: "General Information",
  selected: { control: null },
};

export { Default };
export default story;
