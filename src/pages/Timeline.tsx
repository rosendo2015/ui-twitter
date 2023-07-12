import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Teste Teste Teste Teste ",
    "Deu certo twitar!",
  ])

  function createNewTweet(event: FormEvent){
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  return(
    <main className='timeLine'>
      <Header title='Home'/>
      <form onSubmit={createNewTweet} action="" className='new-tweet-from'>
        <label htmlFor="tweet">
          <img src="http://github.com/usergithub.png" alt="photo user" />
          <textarea 
            id="tweet"
            value={newTweet}
            placeholder="What's happening?"
            onChange={(event)=>{
              setNewTweet(event.target.value)
            }}
          />
        </label>
          <button type='submit'>
            Tweet
          </button>
      </form>
      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet}/>        
      })}
    </main>
  )
}