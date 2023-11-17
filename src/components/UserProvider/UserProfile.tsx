import React, { useEffect } from "react";
import { useUserState } from "./UserProvider";

// Компонент, що використовує контекст
function UserProfile() {
  const { user, setUser } = useUserState();

  // Моделюємо завантаження даних про користувача.
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john.doe@example.com",
      });
    }, 2000);
  }, [setUser]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
