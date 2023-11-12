import { ReactNode, createContext, useState, useMemo } from "react";

export type ModalContextType = {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderProps = {
  children: ReactNode;
};

const GlobalModalProvider = ({ children }: ModalProviderProps) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
  };

  const hideModal = () => {
    setModalContent(null);
  };

  const modalContextValue = useMemo(
    () => ({
      showModal,
      hideModal,
    }),
    [showModal, hideModal],
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {modalContent && <div>{modalContent}</div>}
      {children}
    </ModalContext.Provider>
  );
};
export default GlobalModalProvider;
