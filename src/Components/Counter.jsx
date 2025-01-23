import { useEffect, useState } from "react"

function Counter({data, number}) {

  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    
    const contador = setTimeout(() => {
        setCounter(counter + 1)
    }, 60);

    if (counter === number) clearTimeout(contador);

  }, [counter])

  return (
    <div className="data-number">

      <div className="data-number-inner">

      <p>{counter}</p>
      <p>{data}</p>
      </div>
    </div>
  )
}

export default Counter