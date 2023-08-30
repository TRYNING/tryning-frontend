import { useAuthContext } from "@hooks/useAuthContext";

export function ListOfImage (){
    const { user } = useAuthContext();
    return(
        <div className="ListOfImage">
             {user.imagesfeed?.map((image) => {
            return (
             <img key={image} src={image} alt="" />
            )
          })}
        </div>
    )
}