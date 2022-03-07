import { FaBell, FaCalendarAlt, FaCommentDots, FaEllipsisH, FaExclamationCircle, FaHeadset, FaRegFileAlt, FaRegPlusSquare, FaTasks, FaUsers } from 'react-icons/fa';

export const SidebarData =[
    {
        id: 1,
        name: "Activity",
        icon: <i> <FaBell /> </i>,
    },
    {
        id: 2,
        name: "Chat",
        icon: <i> <FaCommentDots /> </i>,
    },
    {
        id: 3,
        name: "Teams",
        icon: <i> <FaUsers /> </i>,
    },
    {
        id: 4,
        name: "Assignments",
        icon: <i> <FaTasks /> </i>,
    },
    {
        id: 5,
        name: "Calendar",
        icon: <i> <FaCalendarAlt /> </i>,
    },
    {
        id: 6,
        name: "Calls",
        icon: <i> <FaHeadset /> </i>,
    },
    {
        id: 7,
        name: "Files",
        icon: <i> <FaRegFileAlt /> </i>,
    },
];

export const SidebarMore ={
    id: 1,
    icon: <i><FaEllipsisH /></i>,
};

export const SidebarBottom = [
    {
        id: 1,
        name: "App",
        icon: <i><FaRegPlusSquare /></i>
    },
    {
        id: 2,
        name: "Help",
        icon: <i><FaExclamationCircle /></i>,
    },
];