import { useState } from "react"

function FAQ({question, answer}) {

  const [arrowToggle, setArrowToggle] = useState(false)

  const handleToggle = () => {
    setArrowToggle(prevState => !prevState)
  }

  return (
    <div className="faq-inner">

      <div className="faq-inner-question-arrow">

        
      <p>{question}</p><i className={`fa-solid fa-arrow-down ${arrowToggle && 'rotate-down'}`} onClick={handleToggle}></i>


      </div>

        <p className="answer">{arrowToggle && answer}</p>
    </div>
  )
}

export default FAQ 