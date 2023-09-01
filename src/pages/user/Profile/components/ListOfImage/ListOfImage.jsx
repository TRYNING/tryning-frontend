import { useAuthContext } from "@hooks/useAuthContext";

export function ListOfImage() {
  const { user } = useAuthContext();
  return (
    <div className="ListOfImage">
      {user.imagesfeed?.map((image) => {
        return (
          <div key={image} className="container-img">
            <img loading="lazy" src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
}
