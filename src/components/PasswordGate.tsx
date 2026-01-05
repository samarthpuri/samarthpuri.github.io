import { useState } from "react";
import { usePassword } from "@/contexts/PasswordContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface PasswordGateProps {
  children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const { isUnlocked, unlock } = usePassword();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = unlock(password);
    if (!success) {
      setError(true);
      setPassword("");
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        <div className="space-y-2">
          <div className="flex justify-center">
            <Lock className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Password Protected</h1>
          <p className="text-sm text-muted-foreground">
            Enter the password to view the projects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className={`text-center ${error ? "border-red-500" : ""}`}
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-500">Incorrect password</p>
          )}
          <Button type="submit" className="w-full">
            Unlock
          </Button>
        </form>
      </div>
    </div>
  );
}
