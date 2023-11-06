const menu = {
  view: "menu",
  id: "my_menu",
  subMenuPos: "bottom",
  layout: "x",
  data: [
    //menu data
    {
      value: "Primer tutorial",
      href: "/",
    },
    {
      value: "Segundo tutorial",
      href: "/pages/tutorial-2.html",
    },
    {
      value: "Tercer tutorial",
      submenu: [
        { value: "1", href: "/pages/tutorial-3/1.html" },
        { value: "2", href: "/pages/tutorial-3/2.html" },
        { value: "3", href: "/pages/tutorial-3/3.html" },
        { value: "4", href: "/pages/tutorial-3/4.html" },
        { value: "5", href: "/pages/tutorial-3/5.html" },
        { value: "6", href: "/pages/tutorial-3/6.html" },
        { value: "7", href: "/pages/tutorial-3/7.html" },
        { value: "8", href: "/pages/tutorial-3/8.html" },
        { value: "9", href: "/pages/tutorial-3/9.html" },
        { value: "10", href: "/pages/tutorial-3/10.html" },
        { value: "11", href: "/pages/tutorial-3/11.html" },
        { value: "12", href: "/pages/tutorial-3/12.html" },
        { value: "13", href: "/pages/tutorial-3/13.html" },
        { value: "14", href: "/pages/tutorial-3/14.html" },
      ],
    },
  ],
  type: {
    subsign: true,
    height: 80,
  },
};
export default menu;
