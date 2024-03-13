import { useState } from "react";
import { Tabs, ITabs } from "..";

const TabsController = (props: ITabs) => {
  const { tabs, type, showChevrons } = props;
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
      showChevrons={showChevrons}
    />
  );
};

export { TabsController };
