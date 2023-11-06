import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "form",
        elements: [
          {
            view: "counter",
            label: "Passengers",
            labelWidth: 130,
            value: 1,
            min: 1,
            max: 10,
            step: 1,
          },
          {
            view: "slider",
            label: "Cabin bags",
            labelWidth: 130,
            value: 1,
            min: 0,
            max: 3,
            step: 1,
            title: "#value#",
            /* moveTitle: false, */
          },
          {
            view: "rangeslider",
            label: "Luggage (approx.)",
            labelWidth: 130,
            value: [2, 3],
            min: 0,
            max: 4,
            step: 1,
            title: "#value#",
          },
        ],
      },
    ],
  });
});
