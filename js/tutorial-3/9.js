import menu from "../menu.js";

const option_data = [
  { id: 1, value: "Books" },
  { id: 2, value: "Films" },
  { id: 3, value: "Music" },
];

const non_convent_data = [
  { id: 1, folder: "Books" },
  { id: 2, folder: "Films" },
  { id: 3, folder: "Music" },
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
                view: "richselect",
                label: "Richselect",
                value: 1,
                options: {
                  /* view: "datasuggest", */
                  data: non_convent_data,
                  //fitMaster: false,
                  body: {
                    template: "#folder#",
                  },
                },
              },
              {
                view: "combo",
                label: "Combo",
                options: {
                  data: option_data,
                  filter: function (obj, value) {
                    var input = value.toLowerCase();
                    return obj.value.toLowerCase().indexOf(input) !== -1;
                  },
                  body: {
                    yCount: 8,
                  },
                },
              },
              {
                view: "multiselect",
                label: "Multiselect",
                value: "1,2",
                options: {
                  view: "checksuggest",
                  data: option_data,
                },
              },
              {
                view: "multicombo",
                label: "Multicombo",
                value: "2,3",
                options: {
                  template: "#id#. #value#",
                  data: option_data,
                },
              },
            ],
          },
          {},
        ],
      },
    ],
  });
});
