import { Drawer,Layout } from 'antd'
import React from 'react'

const {Sider} = Layout;

function Sidebar() {
  return (
      <div className='mt-4 ml-2 flex-col'>
        <div className='mb-5 mt-5 flex-col h-13'  style={{display: "flex",alignItems: "center"}}>
            <img className='h-5 center' alt='home' src='https://static.thenounproject.com/png/423483-200.png'></img>
            <p className='text-xs'>Home</p>
        </div>
        <div className='mb-5 mt-5 flex-col h-13' style={{display: "flex",alignItems: "center"}}>
            <img className='h-5' alt = 'shorts' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fDZWj4aqS2W7MwcQuNGEndKQaKeYDT8AMfj0dQ_HJw&s'></img>
            <p className='text-xs'>Shorts</p>
        </div>
        <div className='mb-5 mt-5 flex-col h-13' style={{display: "flex",alignItems: "center"}}>
            <img className='h-5' alt='subscriptions' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png'></img>
            <p className='text-xs'>subscriptions</p>
        </div>
        <div className='mb-5 mt-5 flex-col h-13' style={{display: "flex",alignItems: "center"}}>
            <img className='h-5' alt='faviouraites' src='https://cdn-icons-png.flaticon.com/512/73/73814.png'></img>
            <p className='text-xs'>faviouraites</p>
        </div>
        <div className='mb-5 mt-5 flex-col h-13' style={{display: "flex",alignItems: "center"}}>
            <img className='h-5' alt='history' src='https://cdn-icons-png.flaticon.com/512/2961/2961948.png'></img>
            <p className='text-xs'>history</p>
        </div>
      </div>
  )
}

export default Sidebar