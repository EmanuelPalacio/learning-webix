import menu from "../menu.js";

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "form",
        elementsConfig: { labelWidth: 120 },
        cols: [
          {
            width: 400,
            rows: [
              {
                view: "datepicker",
                id: "date",
                label: "Produced",
                // stringResult:true,
                value: new Date(2010, 4, 3),
                type: "time",
              },
              {
                view: "daterangepicker",
                label: "In use",
                //format:webix.i18n.longDateFormatStr,
                value: {
                  start: new Date(2000, 0, 10),
                  end: new Date(2010, 4, 3),
                },
              },
              {
                view: "colorpicker",
                label: "Color",
                value: "#0E86FE",
              },
              { height: 20 },
              {
                view: "button",
                value: "Get data",
                css: "webix_primary",
                click: function () {
                  var value = $$("date").getValue();
                  $$("result").setHTML(value);
                },
              },
              { view: "template", id: "result", borderless: true },
              {},
            ],
          },
          {},
        ],
      },
    ],
  });
});
