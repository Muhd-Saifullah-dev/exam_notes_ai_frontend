import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/api";


export const useCurrentUser=()=>{
    return useQuery(

        {
            queryKey:["currentUser"],
            queryFn:getCurrentUser
        }
    )
}