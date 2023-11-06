import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      { template: "Main info", type: "section" },
      {
        view: "form",
        borderless: true,
        cols: [
          {
            view: "text",
            label: "Name",
            //inputWidth:200,
            labelWidth: 50,
            width: 240,
          },
          {
            view: "richselect",
            label: "Cars",
            options: ["One", "Many"],
            //inputWidth:200,
            labelWidth: 50,
            width: 280,
          },
          { view: "button", value: "Submit", css: "webix_primary" },
        ],
      },
      { template: "Details", type: "section" },
      {
        view: "form",
        borderless: true,
        rows: [
          {
            view: "text",
            label: "Address",
            labelWidth: 80,
            inputHeight: 40,
            height: 44,
          },
          {
            view: "richselect",
            label: "City",
            options: ["Washington, DC", "New York, NYC"],
            labelWidth: 80,
            inputHeight: 40,
            height: 80,
          },
          {
            view: "checkbox",
            value: 1,
            labelRight: "Enable notifications",
            labelWidth: 0,
          },
          {
            view: "button",
            value: "Submit",
            css: "webix_primary",
            width: 120,
            align: "right",
          },
        ],
      },
    ],
  });
});
