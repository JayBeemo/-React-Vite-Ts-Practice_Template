import Icons from "@/components/common/icons";

export const SideMenuList = [
  {
    id: 0,
    route: "/home",
    name: "Home",
    withSubMenu: false,
    icon: Icons.Home({ size: 22, fill: "white" }),
  },
  {
    id: 1,
    route: "/index1",
    name: "Index-1",
    withSubMenu: false,
    icon: Icons.Circle({ size: 22, fill: "white" }),
  },
  {
    id: 2,
    route: "/home",
    name: "Index-2",
    withSubMenu: true,
    icon: Icons.Circle({ size: 22, fill: "white" }),
  },
  {
    id: 3,
    route: "/home",
    name: "Index-3",
    withSubMenu: true,
    icon: Icons.Circle({ size: 22, fill: "white" }),
  },
];

export const SubMenuList = [
  {
    parentId: 2,
    route: "/index2/sub1",
    name: "sub-menu-1",
  },
  {
    parentId: 2,
    route: "/index2/sub2",
    name: "sub-menu-2",
  },
  {
    parentId: 2,
    route: "/index2/sub3",
    name: "sub-menu-3",
  },
  {
    parentId: 3,
    route: "/index3/sub1",
    name: "sub-menu-1",
  },
  {
    parentId: 3,
    route: "/index3/sub2",
    name: "sub-menu-2",
  },
  {
    parentId: 3,
    route: "/index3/sub3",
    name: "webGL Test",
  },
];
