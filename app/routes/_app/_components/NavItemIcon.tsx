import { Link } from '@remix-run/react'
import React from 'react'


interface NavItemIconProps {
    icon: React.ReactNode
    path: string
}

const NavItemIcon: React.FC<NavItemIconProps> = ({ icon, path }) => {
    return (
        <Link to={path} className="p-3 rounded-full hover:bg-[#1A1A1A] cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
        </Link>
    )
}

export default NavItemIcon