import { FormEvent, KeyboardEvent, useState } from "react"
import { PaperPlaneRight } from 'phosphor-react'
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Faz sentido.",
    "Parabéns pelo progresso!",
  ])

  function createNewAnswers(event: FormEvent){
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return(
    <main className='status'>
    <Header title='Tweet'/>
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique nihil quos sapiente nam accusantium maxime tenetur inventore vitae totam alias eius soluta necessitatibus nulla, voluptate quia, animi, at dolore!"/>
    <Separator />
    <form onSubmit={createNewAnswers} action="" className='answer-tweet-from'>
      <label htmlFor="tweet">
        <img src="http://github.com/usergithub.png" alt="photo user" />
        <textarea 
          id="tweet"
          placeholder="Tweet your answer"
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event)=>{
            setNewAnswer(event.target.value)
          }}
        />
      </label>
        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
    </form>
  

    {answers.map(answer => {
      return <Tweet key={answer} content={answer}/>        
    })}
  </main>
  )
}