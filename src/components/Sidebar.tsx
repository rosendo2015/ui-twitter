import {House, Hash, Bell,EnvelopeSimple, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil} from 'phosphor-react'
import twitterLogo from '../assets/logo.svg'
import{ NavLink } from 'react-router-dom'
import './Sidebar.css'
export function Sidebar(){
  return(
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo" />
      <nav className='main-navigation'>
        <NavLink to="/">
          <House weight='fill' />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <EnvelopeSimple />          
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className='newTweet' type='button'>
      <Pencil />
      <span>Tweet</span>
      </button>
    </aside>
  )
}