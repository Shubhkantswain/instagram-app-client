import { Link } from '@remix-run/react'
import React from 'react'

interface NavItemFullProps {
    icon: React.ReactNode
    label: string
    isActive: boolean
    path: string
}

const NavItemFull: React.FC<NavItemFullProps> = ({ icon, label, isActive, path }) => {
    return (
        <Link to={path} className="flex items-center py-3 px-4 rounded-lg hover:bg-[#1A1A1A] cursor-pointer">
            <div className="mr-4 w-6 h-6 flex items-center justify-center">{icon}</div>
            <span className={`text-[0.9rem] ${isActive ? "font-extrabold text-[#ffffff]": "font-light text-gray-200"}`}>{label}</span>
        </Link>
    )
}

export default NavItemFull