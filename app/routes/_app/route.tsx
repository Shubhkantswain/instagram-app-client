import { Outlet } from "@remix-run/react";
import MobileHeader from "./_components/MobileHeader";
import DesktopSidebar from "./_components/DesktopSidebar";
import CollapsedSidebar from "./_components/CollapsedSidebar";
import MobileNavigationFooter from "./_components/MobileNavigationFooter";

export default function AppLayout() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-black overflow-hidden">

                {/* Mobile Header */}
                <MobileHeader />

                {/* Sidebar for md+ */}
                <div className="hidden md:flex flex-col border-r border-[#262626] bg-black">
                    {/* Full sidebar on lg */}
                    <DesktopSidebar />

                    {/* Collapsed sidebar on md */}
                    <CollapsedSidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 relative bg-black text-white">

                    {/* Small screen: fixed header & footer */}
                    <div className="md:hidden">
                        {/* Scrollable area between fixed header/footer */}
                        <div className="absolute top-14 bottom-14 left-0 right-0 overflow-y-auto">
                            <Outlet />
                        </div>

                        {/* Mobile Navigation Footer */}
                        <MobileNavigationFooter />
                    </div>

                    {/* Medium+ screen: only children scroll */}
                    <div className="hidden md:block h-full overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}