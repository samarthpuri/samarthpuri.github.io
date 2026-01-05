import { createContext, useContext, useState, ReactNode } from "react";

interface PasswordContextType {
  isUnlocked: boolean;
  unlock: (password: string) => boolean;
  lock: () => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

// Placeholder password - replace with actual password in the future
const PLACEHOLDER_PASSWORD = "portfolio2024";

export function PasswordProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const unlock = (password: string): boolean => {
    if (password === PLACEHOLDER_PASSWORD) {
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  const lock = () => {
    setIsUnlocked(false);
  };

  return (
    <PasswordContext.Provider value={{ isUnlocked, unlock, lock }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }
  return context;
}
