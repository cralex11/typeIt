import AuthPage from "../../pages/AuthPage";
import Chat from "../../pages/Chat";
import roles from "./roles";
import Groups from "../../pages/Groups";
import {
  ChatIcon,
  InboxIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const { ADMIN, MANAGER, USER } = roles;
const iconStyle = {
  className: "flex-shrink-0 h-6 w-6 text-indigo-600",
};

export const privateRotes = [
  {
    path: "/",
    title: "Chats",
    icon: <ChatIcon {...iconStyle} />,
    component: Chat,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
  {
    path: "/groups",
    title: "Groups",
    icon: <UserGroupIcon {...iconStyle} />,
    component: Groups,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
  {
    path: "/friends",
    title: "Friends",
    icon: <UsersIcon {...iconStyle} />,
    component: Chat,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
  {
    path: "/invitations",
    title: "Invitations",
    icon: <InboxIcon {...iconStyle} />,
    component: Chat,
    exact: true,
    permission: [ADMIN, MANAGER, USER],
  },
];
