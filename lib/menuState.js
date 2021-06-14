import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  // this is our own custom provider!
  // We will store data (state) and functnionality (updates)
  // in here and anyone can access it via the consumer

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <LocalStateProvider
      value={{ menuOpen, setMenuOpen, toggleMenu, openMenu, closeMenu }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the menu local state
function useMenu() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };
