//import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";
//import { ListOfImage } from "./components/ListOfImage/ListOfImage";
//import { COLORS } from "@common/constants/colors";
import { useParams } from "react-router-dom";
import { useUser } from "@hooks/useUser";

export default function PageProfile() {
  const { username } = useParams();
  const { user } = useUser({ username });
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section>
        <h3>{user && user[0].name}</h3>
        <img src={user && user[0].image} />
      </section>
      {/*}
      <section>
        <ListOfImage />
      </section>*/}
    </main>
  );
}
