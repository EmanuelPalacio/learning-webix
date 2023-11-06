import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "toolbar",
        padding: 10,
        margin: 10,
        elements: [
          {
            view: "icon",
            icon: "mdi mdi-information",
            click: function () {
              webix.message("Icon click");
            },
          },
          {
            view: "button",
            value: "Submit",

            click: function () {
              webix.message("Button click");
            },
          },
          {
            view: "toggle",
            onLabel: "Enabled",
            offLabel: "Disabled",
            on: {
              onChange: function (value, old) {
                if (value) webix.message("Enabled");
                else webix.message("Disabled");
              },
            },
          },
        ],
      },
      {},
    ],
  });
});
