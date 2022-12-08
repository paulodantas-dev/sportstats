import { MdDashboard, MdBarChart } from "react-icons/md";

export const MenuItems = [
  {
    label: "Dashboard",
    url: "/",
    icon: <MdDashboard size={24} />,
  },
  {
    label: "Previsões",
    url: "/predictions",
    icon: <MdBarChart size={24} />,
  },
];
