import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        rows: [
          {
            view: "toolbar",
            css: "webix_dark",
            elements: [
              { view: "label", label: "Controls in the toolbar", width: 180 },
              { view: "text" },
              { view: "button", value: "Submit" },
            ],
          },
          {
            view: "form",
            elements: [
              { view: "label", label: "Controls in the form" },
              { view: "text" },
              { view: "button", value: "Submit" },
            ],
          },
          {
            margin: 8,
            padding: 17,
            cols: [
              { view: "label", label: "Controls in the layout" },
              { view: "text" },
              { view: "button", value: "Submit" },
            ],
          },
          {},
        ],
      },
    ],
  });
});
