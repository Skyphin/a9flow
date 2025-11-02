import React, { createContext, useState, ReactNode } from "react";

interface UrlState {
  title: string;
  url: string;
  loading: boolean;
  error: string | null;
}

interface UrlContextType {
  state: UrlState;
  setTitle: (title: string) => void;
  setUrl: (url: string) => void;
  setTitleAndUrl: (data: { title: string; url: string }) => void;
}

const initialState: UrlState = {
  title: "",
  url: "",
  loading: false,
  error: null,
};

// eslint-disable-next-line react-refresh/only-export-components
export const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<UrlState>(initialState);

  const setTitle = (title: string) => {
    setState((prev) => ({ ...prev, title }));
  };

  const setUrl = (url: string) => {
    setState((prev) => ({ ...prev, url }));
  };

  const setTitleAndUrl = (data: { title: string; url: string }) => {
    setState((prev) => ({ ...prev, title: data.title, url: data.url }));
  };

  return (
    <UrlContext.Provider
      value={{
        state,
        setTitle,
        setUrl,
        setTitleAndUrl,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
