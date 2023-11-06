import menu from "../menu.js";

function disable() {
  if (this.validate()) {
    $$("submit").enable();
  } else {
    $$("submit").disable();
  }
}

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "form",
        borderless: true,
        id: "form",
        on: {
          onChange: disable,
          onValues: disable,
        },
        rows: [
          { template: "Main info", type: "section" },
          { view: "text", label: "Name", name: "name", required: true },
          {
            view: "richselect",
            label: "Cars",
            name: "cars",
            options: ["One", "Many"],
            required: true,
          },
          {
            view: "checkbox",
            value: 1,
            name: "notifs",
            labelRight: "Enable notifications",
            labelWidth: 0,
          },
          {
            cols: [
              {},
              {
                view: "button",
                value: "Set values",
                width: 120,
                click: function () {
                  $$("form").setValues({
                    name: "Jessamine Kaldwin",
                    cars: "Many",
                    notifs: 0,
                  });
                },
              },
              {
                view: "button",
                value: "Clear",
                width: 120,
                click: function () {
                  $$("form").clear();
                },
              },
              {
                view: "button",
                value: "Submit",
                css: "webix_primary",
                width: 120,
                disabled: true,
                id: "submit",
              },
            ],
          },
        ],
      },
    ],
  });
});
