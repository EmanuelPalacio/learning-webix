import menu from "../menu.js";
webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "toolbar",
        css: "webix_dark",
        paddingX: 17,
        elements: [{ view: "label", label: "A form" }],
      },
      {
        view: "form",
        elementsConfig: {
          labelWidth: 130,
        },
        elements: [
          { view: "text", label: "Username", value: "John Doe" },
          {
            view: "datepicker",
            label: "Date of birth",
            value: new Date(1985, 0, 31),
          },
          {
            view: "combo",
            label: "Country",
            placeholder: "Type to search...",
            /* options: "//docs.webix.com/samples/server/countries", */
          },
          {
            view: "switch",
            labelRight: "Keep this data private",
            labelWidth: 0,
          },
          { view: "colorpicker", label: "Main theme color", value: "#6E00DD" },
          {
            cols: [
              { view: "label", label: "Select language", width: 130 },
              {
                view: "segmented",
                options: [
                  { id: "en", value: "English" },
                  { id: "fr", value: "Français" },
                  { id: "de", value: "Deutsch" },
                ],
              },
            ],
          },
          {
            view: "checkbox",
            labelRight: "I agree with the terms of <b>Privacy Policy</b>",
            labelWidth: 0,
            value: 0,
          },
          {
            cols: [
              {},
              {
                view: "button",
                css: "webix_danger",
                value: "Cancel",
                width: 150,
              },
              {
                view: "button",
                css: "webix_primary",
                value: "Submit",
                width: 150,
              },
            ],
          },
        ],
      },
    ],
  });
});
