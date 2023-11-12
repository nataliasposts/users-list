import { Provider } from "react-redux";
import { persistor, store } from "../store/initStore";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";

type GlobalStoreProviderProps = {
  children: ReactNode;
};

const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};
export default GlobalStoreProvider;
