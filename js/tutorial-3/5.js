import menu from "../menu.js";
webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "form",
        rows: [
          {
            view: "text",
            label: "Text",
            value: "Some text",
            placeholder: "Enter a phone number",
            pattern: { mask: "###-## ########", allow: /[0-9]/g },
            on: {
              onChange: function () {
                webix.message("Value changed to " + this.getValue());
              },
            },
          },
          {
            view: "search",
            label: "Search",
            // icon:"wxi-pencil",
            value: "A search query",
            placeholder: "Enter some text and click on the icon",
            on: {
              onSearchIconClick: function () {
                webix.message(this.getValue());
              },
            },
          },
          {
            view: "counter",
            label: "Counter",
            value: 9,
            min: 3,
            max: 33,
            step: 3,
          },
          {
            view: "textarea",
            label: "Textarea",
            placeholder: "Type something to trigger the keypress events",
            value: "A long \nmultiline text",
            on: {
              onKeyPress: function (code, e) {
                webix.message("Key code is " + code);
              },
              onTimedKeyPress: function () {
                webix.message(this.getValue());
              },
            },
          },
        ],
      },
    ],
  });
});
