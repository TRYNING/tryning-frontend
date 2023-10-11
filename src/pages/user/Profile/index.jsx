//import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";
//import { ListOfImage } from "./components/ListOfImage/ListOfImage";
//import { COLORS } from "@common/constants/colors";
import { useParams } from "react-router-dom";
import { useUser } from "@hooks/useUser";

export default function PageProfile() {
  const { username } = useParams();
  const { user } = useUser({ username });
  return (
    <main className="min-h-screen flex  justify-center">
      <section className="flex flex-col items-center mt-40">
        <img
          src={user && user[0].image}
          className="rounded-full w-44 h-44 object-cover"
        />
        <h2 className="font-bold">@{username}</h2>
        <h3>{user && user[0].name}</h3>
      </section>
      {/*}
      <section>
        <ListOfImage />
      </section>*/}
    </main>
  );
}
