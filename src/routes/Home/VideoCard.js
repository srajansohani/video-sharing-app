import { Card } from 'antd';
import React from 'react'

function VideoCard({info}) {
    console.log(info)
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle} = snippet;
  return (
    <div className='m-2 p-2'>
        <Card 
        hoverable
        bordered={false}
        cover={<img alt='example' src={thumbnails?.medium?.url} />}
        className='m-2 p-2 hover:shadow-lg'
        >
        <div>
            <div>
                <p className='font-bold py-2'>{title.slice(0,40)}...</p>
                <p>{channelTitle}</p>
                <p className='font-light'>{statistics.viewCount}</p>
            </div>
        </div>
    </Card>
    </div>
  )
}

export default VideoCard