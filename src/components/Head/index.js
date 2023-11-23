import { Button, Input } from 'antd'
import React from 'react'

function Head({openDrawer}) {
  return (
    <div className='flex justify-between shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={openDrawer} className="h-12 w-30" alt='menu' src='https://i.pinimg.com/474x/0b/53/d7/0b53d7e42184a1823360653f60e7d77b.jpg'></img>
            <img className="h-12" src='https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg' alt='yt-logo'></img>
        </div>
        <div className='flex mt-3 w-1/2'>
            <Input.Search className='h-6 rounded-l-full w-3/4' />
        </div>
        <div className='mt-2 col-span-1'>
            <img className='h-8' alt='user' src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg'></img>
        </div>
    </div>
  )
}

export default Head