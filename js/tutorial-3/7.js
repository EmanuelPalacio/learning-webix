import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "form",
        elements: [
          {
            view: "checkbox",
            labelRight: "Enable search",
            labelWidth: 0,
            value: 1,
          },
          {
            view: "radio",
            label: "Filter",
            labelPosition: "top",
            options: [
              { id: "1", value: "Disabled" },
              { id: "2", value: "Enabled" },
              { id: "3", value: "Per column" },
              { id: "5", value: "Per column" },
              { id: "6", value: "Per column" },
            ],
            value: "1",
            vertical: true,
          },
          {
            view: "switch",
            label: "Light",
            labelWidth: 60,
            labelRight: "Darkness",
            value: 1,
          },
          {
            view: "switch",
            label: "Theme",
            labelWidth: 60,
            value: 1,
            onLabel: "on",
            offLabel: "off",
          },
        ],
      },
    ],
  });
});
