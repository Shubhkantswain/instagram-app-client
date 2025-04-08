import React from 'react'
import NavItemIcon from './NavItemIcon'
import { HeartIcon, HeartIconActive, MessageIcon, MessageIconActive } from '~/Svgs'
import { useLocation } from '@remix-run/react'

function MobileHeader() {
    const location = useLocation()
    return (
        <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-black z-50">
            <div className="flex justify-between items-center px-4 py-3 h-full">
                <h1 className="text-xl font-semibold text-white">Instagram</h1>
                <div className="flex space-x-4">
                    <NavItemIcon icon={location.pathname == "/notifications" ? <HeartIconActive /> : <HeartIcon />} path='/notifications' />
                    <NavItemIcon icon={location.pathname == "/messages" ? <MessageIconActive /> : <MessageIcon />} path='/messages' />
                </div>
            </div>
        </div>
    )
}

export default MobileHeader