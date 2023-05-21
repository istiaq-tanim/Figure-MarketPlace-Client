import { useEffect } from "react"

const useTitle = title =>
{
      useEffect(()=>{
        document.title =`Figure Frontier | ${title}`;
      },[title])
}

export default useTitle;