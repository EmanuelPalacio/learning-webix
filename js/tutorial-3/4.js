import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        padding: 10,
        margin: 10,
        rows: [
          {
            cols: [
              {
                view: "icon",
                icon: "mdi mdi-help-circle",
                click: function () {
                  webix.message("Help");
                },
              },
              {},
            ],
          },
          {
            cols: [
              {
                view: "button",
                type: "iconTop",
                height: 55,
                css: "webix_danger",
                icon: "wxi-alert",
                label: "Report",
                click: function () {
                  webix.message("Reported");
                },
              },
              {
                view: "button",
                type: "iconTop",
                height: 55,
                css: "webix_primary",
                icon: "wxi-check",
                label: "Resolve",
                click: function () {
                  webix.message("Resolved");
                },
              },
            ],
          },
          {
            view: "toggle",
            onLabel: "On",
            offLabel: "Off",
            value: true,
            on: {
              onChange: function (value, old) {
                webix.message(value ? "On" : "Off");
              },
            },
          },
        ],
      },
      {},
    ],
  });
});
