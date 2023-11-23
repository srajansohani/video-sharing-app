import React,{useState,useEffect} from 'react'
import Head from './components/Head'
import Sidebar from './components/sidebar'
import SourceApp from './routes'
import { Drawer } from 'antd'
import SideBarDrawer from './components/sidebar/SideBarDrawer'

function MainApp() {
    const [drawerOpen,setDrawerOpen] = useState(false)
    const onClose = ()=>{
        setDrawerOpen(false)
    }
  return (
        <>
            <Head
             openDrawer = {()=>{setDrawerOpen(true)}}
             />
            <div className='flex'>
                <Sidebar  />
                <SourceApp />
            </div>
            <Drawer
             open={drawerOpen}
             placement='left'
             closable={false}
             onClose={onClose}
             width={220}
             style={{
                padding: "0 0 0 0",
             }}
             bodyStyle={{
                padding: "10 10 10 10",
             }}
            >
                <SideBarDrawer 


                />
            </Drawer>
        </>
  )
}

export default MainApp