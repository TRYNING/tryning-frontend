import { useAuthContext } from "@hooks/useAuthContext";

export default function PageProfile() {
  const { user } = useAuthContext();
  return (
    <main className="Profile-container">
      <h1>Perfil de:</h1>
      <h2>{user.email}</h2>
    </main>
  );
}
