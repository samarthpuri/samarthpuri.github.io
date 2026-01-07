import { createContext, useContext, useState, ReactNode } from "react";

interface PasswordContextType {
  isUnlocked: boolean;
  unlock: (password: string) => boolean;
  lock: () => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

// Password validation disabled until backend authentication is configured
// TODO: Implement secure server-side password validation via Lovable Cloud

export function PasswordProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const unlock = (_password: string): boolean => {
    // Always return false - password-protected content is locked
    // until proper backend authentication is implemented
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
