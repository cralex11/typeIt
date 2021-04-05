import AuthPage from "../../pages/AuthPage";
import Chat from "../../pages/Chat";
import roles from "./roles";
import Groups from "../../pages/Groups";

const { ADMIN, MANAGER, USER } = roles;

export const privateRotes = [
  {
    path: "/",
    title: "Chats",
    component: Chat,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
  {
    path: "/groups",
    title: "Groups",
    component: Groups,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
  {
    path: "/friends",
    title: "Friends",
    component: Chat,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
  {
    path: "/invitations",
    title: "Invitations",
    component: Chat,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
];
