import { IconName } from "../components/icons/Icons";
import { T } from "../theme/tokens";


export const NAV = [
  { id: 'home', label: 'Home', icon: 'home' as IconName, ac: T.cyan },
  { id: 'timetable', label: 'Timetable', icon: 'cal' as IconName, ac: T.mint },
  {
    id: 'insights',
    label: 'Insights',
    icon: 'compass' as IconName,
    ac: T.lilac,
  },
  { id: 'tools', label: 'Tools', icon: 'wrench' as IconName, ac: T.lemon },
  { id: 'profile', label: 'Profile', icon: 'person' as IconName, ac: T.peach },
];