import { useState } from "react";
import { Tabs, ITabs } from "..";

const TabsController = (props: ITabs) => {
  const { tabs, type } = props;
  const [currentTab, setCurrentTab] = useState(props.selectedTab);

  const onChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  return (
    <Tabs
      tabs={tabs}
      type={type}
      onChange={onChange}
      selectedTab={currentTab}
    />
  );
};

export { TabsController };
