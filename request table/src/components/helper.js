import { useState } from "react";

export const useIncrement = (initialValue) => {
    const [initial, setInitial] = useState(initialValue);
  
    const increment = () => {
      setInitial(initial + 1);
    }
  
    return [initial, increment];
}