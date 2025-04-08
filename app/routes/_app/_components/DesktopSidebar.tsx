import React from 'react'
import { useLocation } from 'react-router-dom'
import NavItemFull from './NavItemFull'
import {
  CompassIcon,
  CompassIconActive,
  FilmIcon,
  FilmIconActive,
  HeartIcon,
  HeartIconActive,
  HomeIcon,
  HomeIconActive,
  MenuIcon,
  MessageIcon,
  MessageIconActive,
  PlusIcon,
  PlusIconActive,
  UserIcon,
  UserIconActive,
} from '~/Svgs'
import NavItemFullWithoutLink from './NavItemFullWithoutLink'

// Define all sidebar items with their corresponding paths
export const sidebarItems = [
  { label: 'Home', path: '/', icon: <HomeIcon />, activeIcon: <HomeIconActive /> },
  { label: 'Explore', path: '/explore', icon: <CompassIcon />, activeIcon: <CompassIconActive /> },
  { label: 'Reels', path: '/reels', icon: <FilmIcon />, activeIcon: <FilmIconActive /> },
  { label: 'Messages', path: '/messages', icon: <MessageIcon />, activeIcon: <MessageIconActive /> },
  { label: 'Notifications', path: '/notifications', icon: <HeartIcon />, activeIcon: <HeartIconActive /> },
  { label: 'Create', path: '/create', icon: <PlusIcon />, activeIcon: <PlusIconActive /> },
  { label: 'Profile', path: '/profile', icon: <UserIcon />, activeIcon: <UserIconActive /> },
]

const moreItem = { label: 'More', icon: <MenuIcon /> }

function DesktopSidebar() {
  const location = useLocation()

  return (
    <div className="hidden lg:flex w-64 flex-col p-3 h-full">
      <div className="mb-6 py-4 pl-4">
        <h1 className="text-xl font-semibold">Instagram</h1>
      </div>
      <nav className="flex-1 space-y-3">
        {sidebarItems.map((item) => {
          const isActive = location.pathname == item.path
          return (
            <NavItemFull
              key={item.label}
              icon={isActive ? item.activeIcon : item.icon}
              label={item.label}
              isActive={isActive}
              path={item.path}
            />
          )
        })}
      </nav>
      <div className="mt-auto">
        <NavItemFullWithoutLink icon={moreItem.icon} label={moreItem.label} />
      </div>
    </div>
  )
}

export default DesktopSidebar