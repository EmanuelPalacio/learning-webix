import menu from "../menu.js";

const grid_data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    votes: 678790,
    rating: 9.2,
    rank: 1,
    category: "Thriller",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    votes: 511495,
    rating: 9.2,
    rank: 2,
    category: "Crime",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    year: 1974,
    votes: 319352,
    rating: 9.0,
    rank: 3,
    category: "Crime",
  },
  {
    id: 4,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    votes: 213030,
    rating: 8.9,
    rank: 4,
    category: "Western",
  },
  {
    id: 5,
    title: "Pulp fiction",
    year: 1994,
    votes: 533848,
    rating: 8.9,
    rank: 5,
    category: "Crime",
  },
  {
    id: 6,
    title: "12 Angry Men",
    year: 1957,
    votes: 164558,
    rating: 8.9,
    rank: 6,
    category: "Western",
  },
  {
    id: 7,
    title: "Schindler's List",
    year: 1993,
    votes: 355638,
    rating: 8.9,
    rank: 7,
    category: "Drama",
  },
  {
    id: 8,
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    votes: 283176,
    rating: 8.8,
    rank: 8,
    category: "Drama",
  },
  {
    id: 9,
    title: "The Dark Knight",
    year: 2008,
    votes: 61237,
    rating: 8.8,
    rank: 9,
    category: "Action",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    votes: 472843,
    rating: 8.8,
    rank: 10,
    category: "Fantasy",
  },
  {
    id: 11,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    votes: 348012,
    rating: 8.8,
    rank: 11,
    category: "Science fiction",
  },
  {
    id: 12,
    title: "Inception",
    year: 2010,
    votes: 458693,
    rating: 8.8,
    rank: 12,
    category: "Adventure",
  },
];

webix.ready(() => {
  webix.ui({
    rows: [
      menu,
      {
        view: "tabbar",
        multiview: true,
        value: "settings",
        options: [
          { id: "settings", value: "Settings" },
          { id: "pages", value: "Data" },
        ],
      },
      {
        animate: false,
        cells: [
          {
            id: "pages",
            rows: [
              {
                view: "datatable",
                id: "table",
                scrollX: false,
                columns: [
                  { id: "title", header: "Title", fillspace: true },
                  { id: "year", header: "Year" },
                  { id: "rating", header: "Rating" },
                  { id: "votes", header: "Votes" },
                ],
                data: grid_data,
                pager: "pager",
              },
              {
                view: "pager",
                id: "pager",
                size: 5,
                group: 3,
                template:
                  "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}",
              },
              {},
            ],
          },
          {
            id: "settings",
            view: "form",
            rows: [
              { template: "Settings", type: "section" },
              { view: "label", label: "Choose the language" },
              {
                view: "segmented",
                inputWidth: 200,
                options: [
                  { id: "en", value: "English" },
                  { id: "kr", value: "Korean" },
                ],
                on: {
                  onChange(value, old) {
                    webix.message("Option: " + value);
                  },
                },
              },
              {},
            ],
          },
        ],
      },
    ],
  });
});
