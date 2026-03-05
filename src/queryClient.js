import {QueryClient} from "@tanstack/react-query"


export const queryclient=new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:1000 * 60 * 5,
            cacheTime:1000 * 60 * 60,
            refetchOnWindowFocus:false,
            retry:1,
            suspense:false
            
        },
        mutations:{
            retry:0
        }
    }
})

