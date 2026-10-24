import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import TeamMember from "../pages/TeamMember";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/service",
                Component: Service
            },
            {
                path: "/team-member",
                Component: TeamMember
            }
        ]
    }
])