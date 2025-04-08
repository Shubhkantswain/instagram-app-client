import React from 'react'
import NavItemIcon from './NavItemIcon'
import { CompassIcon, CompassIconActive, FilmIcon, FilmIconActive, HomeIcon, HomeIconActive, PlusIcon, PlusIconActive, UserIcon, UserIconActive } from '~/Svgs'
import { useLocation } from '@remix-run/react'

export const navigationFooterItems = [
    { label: 'Home', path: '/', icon: <HomeIcon />, activeIcon: <HomeIconActive /> },
    { label: 'Explore', path: '/explore', icon: <CompassIcon />, activeIcon: <CompassIconActive /> },
    { label: 'Create', path: '/create', icon: <PlusIcon />, activeIcon: <PlusIconActive /> },
    { label: 'Reels', path: '/reels', icon: <FilmIcon />, activeIcon: <FilmIconActive /> },
    { label: 'Profile', path: '/profile', icon: <UserIcon />, activeIcon: <UserIconActive /> },
]

function MobileNavigationFooter() {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <div className="fixed bottom-0 left-0 right-0 h-14 bg-black border-t border-[#262626] z-50">
            <div className="flex justify-around items-center h-full">
                {
                    navigationFooterItems.map((item) => {
                        const isActive = currentPath === item.path
                        const Icon = isActive ? item.activeIcon : item.icon

                        return <NavItemIcon key={item.label} icon={Icon} path={item.path} />
                    })
                }
            </div>
        </div>
    )
}

export default MobileNavigationFooter