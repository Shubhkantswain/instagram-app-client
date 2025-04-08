import React from 'react'
import { useLocation } from '@remix-run/react'
import NavItemIcon from './NavItemIcon'
import { sidebarItems } from './DesktopSidebar'
import { InstagramLogo, MenuIcon } from '~/Svgs'
import NavItemIconWithoutLink from './NavItemIconWithoutLink'

function CollapsedSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className="lg:hidden flex flex-col items-center py-4 w-16 h-full">
      <div className="mb-8 py-4">
        <InstagramLogo />
      </div>
      <nav className="flex-1 space-y-3 flex flex-col items-center">
        {sidebarItems.map((item, index) => {
          const isActive = currentPath === item.path
          const Icon = isActive ? item.activeIcon : item.icon

          return <NavItemIcon key={index} icon={Icon} path={item.path} />
        })}
      </nav>
      <div className="mt-auto">
        <NavItemIconWithoutLink icon={<MenuIcon />} />
      </div>
    </div>
  )
}

export default CollapsedSidebar