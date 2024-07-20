import React from 'react'
import {navAssets} from '../../assets/assets'
import './Home.css'

const Home = () => {
  return (
    <div className="banner-container">
        <div>    
            <p className="banner-left-line-1">WORLDS LARGEST APP FOR HINDU DEVOTEES</p>
            <p>Pray daily with <span>Sri Mandir. </span><br/>One App for all your<br/> devotional needs</p>
            <div className="playstore-appstore-container">
                <img src={navAssets.img_playstore_logo}/>
                <img src={navAssets.img_appstore_logo}/>
            </div>
        </div>
        <img src={navAssets.img_hero_artwork_en} />
    </div>
  )
}

export default Home