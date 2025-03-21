import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Register the router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
