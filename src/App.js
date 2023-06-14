import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/Main/MainPage";
import { PaymentPage } from "./pages/Payment/PaymentPage";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "payment", element: <PaymentPage /> },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
