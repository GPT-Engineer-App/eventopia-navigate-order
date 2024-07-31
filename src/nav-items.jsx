import { Home, Calendar, Beer, MapPin, MessageCircle } from "lucide-react";
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";
import BarOrdering from "./pages/BarOrdering.jsx";
import VenueNavigation from "./pages/VenueNavigation.jsx";
import UserSupport from "./pages/UserSupport.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
    page: <Events />,
  },
  {
    title: "Bar Ordering",
    to: "/bar",
    icon: <Beer className="h-4 w-4" />,
    page: <BarOrdering />,
  },
  {
    title: "Venue Navigation",
    to: "/navigation",
    icon: <MapPin className="h-4 w-4" />,
    page: <VenueNavigation />,
  },
  {
    title: "User Support",
    to: "/support",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <UserSupport />,
  },
];
