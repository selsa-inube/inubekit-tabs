const parameters = {
  docs: {
    description: {
      component: "Use to alternate among related views within the same context",
    },
  },
};

const props = {
  tabs: {
    control: { type: "func" },
    description:
      "shall be designed to accept an array of objects with a predetermined structure",
    table: {
      defaultValue: { summary: "[{id,label}]" },
    },
  },
  selectedTab: {
    control: { type: "func" },
    description:
      "The state of the tabs-component shall be determined using the id-property to identify the selected tab",
    table: {
      defaultValue: { summary: "idOfOneTab" },
    },
  },
  onChange: {
    options: ["logState"],
    control: { type: "func" },
    description:
      "attribute shall determine the behavior of the click event and should handle the state for the tabs-component",
  },
  scroll: {
    options: [false, true],
    control: { type: "select" },
    description:
      "allows the component to determine whether it scrolls sideways",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};

export { parameters, props };
