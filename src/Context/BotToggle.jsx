import { useState, createContext } from "react";

export const BotContext = createContext()

export default function BotToggleProvider({children}) {

  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(prevState => !prevState)
  }

  return (
    <BotContext.Provider value={{toggle, handleToggle}}>
      {children}
    </BotContext.Provider>
  )
}
