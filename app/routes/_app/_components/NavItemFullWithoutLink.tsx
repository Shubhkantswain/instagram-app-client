interface NavItemFullWithoutLinkProps {
    icon: React.ReactNode
    label: string
}

const NavItemFullWithoutLink: React.FC<NavItemFullWithoutLinkProps> = ({ icon, label }) => {
    return (
        <div className="flex items-center py-3 px-4 rounded-lg hover:bg-[#1A1A1A] cursor-pointer">
            <div className="mr-4 w-6 h-6 flex items-center justify-center">{icon}</div>
            <span className={`text-[0.9rem] text-[#ffffff]`}>{label}</span>
        </div>
    )
}

export default NavItemFullWithoutLink