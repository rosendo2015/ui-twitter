import './Tweet.css'
import {ChatCircle, ArrowClockwise, Heart} from 'phosphor-react'
import{ Link } from 'react-router-dom'
interface TweetProps {
  content: string,
}

export function Tweet(props: TweetProps){
  return(
    <Link to='status' className="tweet">
      <img src="https://github.com/mariajulia.png" alt="photo user" />
      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Rosendc30</strong>
          <span>@rosendc30</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button"><ChatCircle />32</button>
          <button type="button"><ArrowClockwise />32</button>
          <button type="button"><Heart />32</button>
        </div>
      </div>
    </Link>
  )
}