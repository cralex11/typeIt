import { ChatIcon, HomeIcon, InboxIcon, UsersIcon} from "@heroicons/react/outline";

const iconStyle = {
    className: "flex-shrink-0 h-6 w-6 text-indigo-600"
}
export const links = [
    {
        title: "Home",
        icon: <HomeIcon {...iconStyle} />
    },
    {
        title: "Chats",
        icon: <ChatIcon{...iconStyle} />
    },
    {
        title: "Friends",
        icon: <UsersIcon {...iconStyle} />
    },
    {
        title: "Invitations",
        icon: <InboxIcon {...iconStyle} />
    },


]
