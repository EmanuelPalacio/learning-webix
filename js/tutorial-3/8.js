import menu from "../menu.js";

const option_data = [
  { id: 1, value: "Books" },
  { id: 2, value: "Films" },
  { id: 3, value: "Music" },
];

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "form",
        elementsConfig: { labelWidth: 120 },
        cols: [
          {
            rows: [
              {
                view: "select",
                label: "Select",
                options: option_data,
                value: 1,
              },
              {
                view: "richselect",
                label: "Richselect",
                options: option_data,
                value: 2,
              },
              { view: "combo", label: "Combo", options: option_data, value: 3 },
              {
                view: "multiselect",
                label: "Multiselect",
                options: option_data,
                value: "1,2",
              },
              {
                view: "multicombo",
                label: "Multicombo",
                options: option_data,
                value: "2,3",
              },
            ],
          },
          {},
        ],
      },
    ],
  });
});
