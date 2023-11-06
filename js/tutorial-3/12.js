import menu from "../menu.js";
const buttons = {
  cols: [
    {
      view: "button",
      value: "Submit",
      css: "webix_primary",
      click: function () {
        var form = $$("form");
        if (form.validate()) {
          var values = form.getValues();
          $$("result").setHTML(
            "<pre>" + JSON.stringify(values, null, 2) + "</pre>"
          );
        }
      },
    },
    {
      view: "button",
      value: "Set values",
      click: function () {
        $$("form").setValues({
          email: "kirin.jindosh@clockworks.ka",
          phone: "+777 423 45 78",
        });
      },
    },
  ],
};

const form = {
  view: "form",
  id: "form",
  // elementsConfig:{ labelAlign:"right" },
  elements: [
    { view: "label", label: "Manufacturer's info" },
    { view: "text", name: "email", label: "Email", required: true },
    { view: "text", name: "phone", label: "Tel. No" },
    buttons,
  ],
  on: {
    onChange() {
      var values = this.getValues();
      $$("result").setHTML(
        "<pre>" + JSON.stringify(values, null, 2) + "</pre>"
      );
    },
  },
  rules: {
    email: webix.rules.isEmail,
  },
};

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "toolbar",
        css: "webix_dark",
        padding: { left: 16 },
        elements: [
          { view: "label", label: "Controls in the toolbar", width: 180 },
          { view: "text" },
          { view: "button", value: "Submit" },
        ],
      },
      form,
      { id: "result", view: "template" },
      {},
    ],
  });
});
