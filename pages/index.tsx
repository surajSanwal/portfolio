
import { store } from "@redux/store";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Provider } from "react-redux";
const DynamicHomePage = dynamic(() => import('@pages/index'), {
  loading: () => <Skeleton />,
})
const Home: React.FC = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <DynamicHomePage />
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
