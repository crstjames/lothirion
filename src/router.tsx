import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import Home from "./Home";
import About from "./pages/About";

// Create a root route
const rootRoute = createRootRoute();

// Create a home route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Create an about route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about/company",
  component: About,
});

// Create the router
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

const router = createRouter({ routeTree });

export default router;
