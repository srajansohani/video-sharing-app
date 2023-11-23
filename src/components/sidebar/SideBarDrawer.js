import { Divider } from 'antd'
import React from 'react'
import {MenuOutlined} from '@ant-design/icons'

function SideBarDrawer() {
  return (
    <>
    <div className='flex col-span-1'>
        <MenuOutlined />
        <img className= 'h-16' src='https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg' alt='yt-logo'></img>
    </div>
    <div>
        <div className='mb-5 mt-5 h-13 cursor-pointer  hover:bg-gray-200 rounded px-2'  style={{display: "flex",alignItems: "center"}}>
            <img className='h-7' alt='home' src='https://static.thenounproject.com/png/423483-200.png'></img>
            <p className='ml-3'>Home</p>
        </div>
        <div className='mb-5 mt-5 h-13 cursor-pointer  hover:bg-gray-200 rounded px-2'  style={{display: "flex",alignItems: "center"}}>
            <img className='h-7' alt = 'shorts' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fDZWj4aqS2W7MwcQuNGEndKQaKeYDT8AMfj0dQ_HJw&s'></img>
            <p className='ml-3'>Shorts</p>
        </div>
        <div className='mb-5 mt-5 h-13 cursor-pointer hover:bg-gray-200 rounded-lg px-2' style={{display: "flex",alignItems: "center"}}>
            <img className='h-7' alt='subscriptions' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png'></img>
            <p className='ml-3'>subscriptions</p>
        </div>
    </div>
    <Divider />
    <div>
        <div className='mb-5 mt-5 h-13 cursor-pointer  hover:bg-gray-200 rounded px-2' style={{display: "flex",alignItems: "center"}}>
            <img className='h-7' alt='faviouraites' src='https://cdn-icons-png.flaticon.com/512/73/73814.png'></img>
            <p className='ml-3'>faviouraites</p>
        </div>
        <div className='mb-5 mt-5 h-13 cursor-pointer  hover:bg-gray-200 rounded px-2' style={{display: "flex",alignItems: "center"}}>
            <img className='h-7' alt='history' src='https://cdn-icons-png.flaticon.com/512/2961/2961948.png'></img>
            <p className='ml-3'>history</p>
        </div>
    </div>
    </>
  )
}

export default SideBarDrawer