interface NavItemIconWithoutLinkProps {
    icon: React.ReactNode
}

const NavItemIconWithoutLink: React.FC<NavItemIconWithoutLinkProps> = ({ icon }) => {
    return (
        <div className="p-3 rounded-full hover:bg-[#1A1A1A] cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
        </div>
    )
}

export default NavItemIconWithoutLink