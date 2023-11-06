import menu from "./menu.js";

const grid_data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    votes: 678790,
    rating: 9.2,
    rank: 1,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    votes: 511495,
    rating: 9.2,
    rank: 2,
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: 1974,
    votes: 319352,
    rating: 9.0,
    rank: 3,
  },
  {
    id: 4,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    votes: 213030,
    rating: 8.9,
    rank: 4,
  },
  {
    id: 5,
    title: "My Fair Lady",
    year: 1964,
    votes: 533848,
    rating: 8.9,
    rank: 5,
  },
  {
    id: 6,
    title: "12 Angry Men",
    year: 1957,
    votes: 164558,
    rating: 8.9,
    rank: 6,
  },
];

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "datatable",
        id: "miTabla",
        css: "webix_data_border webix_header_border",
        pager: "pager",
        footer: true,
        columns: [
          {
            id: "title",
            fillspace: true,
            template: function (obj) {
              if (obj.rank < 6)
                return "<span style='color:red'>" + obj.title + "</span>";
              return obj.title;
            },
            header: ["Film title", { content: "textFilter" }],
            // footer:[ {text:"Total votes:", colspan:3} ]
          },
          {
            id: "year",
            fillspace: true,
            header: [{ text: "Released" }, "Under the span"],
          },
          {
            id: "rating",
            fillspace: true,
            format: function (value) {
              return value.toFixed(2);
            },
            cssFormat: function (value) {
              if (value > 9) {
                return "test";
              }
            },
            header: [{ text: "Movie rating details" }, "Rating"],
            footer: [{ content: "summColumn" }],
          },
          {
            id: "votes",
            fillspace: true,
            template: "<span style='color:green;'>#votes#</span>",
            header: ["Under the span", "Votes"],
            footer: [{ content: "summColumn" }],
          },
          {
            width: 50,
            template: "{common.trashIcon()}",
          },
        ],
        data: grid_data,
      },
      {
        view: "pager",
        id: "pager",
        size: 5,
        group: 3,
        template:
          "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}",
      },
    ],
  });
});
