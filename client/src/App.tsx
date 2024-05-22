import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Programs from "./pages/Programs";
import ProgramCurriculumRecord from "./pages/ProgramCurriculumRecord";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="programs" />} />
            <Route path="programs" element={<Programs />}></Route>
            <Route
              path="program-curriculum-record"
              element={<ProgramCurriculumRecord />}
            ></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>

          <Route path="login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "var(--color-green-0)",
              color: "var(--color-green-1)",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "var(--color-red-2)",
              color: "var(--color-red-3)",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            fontWeight: "600",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
