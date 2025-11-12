import Sidebar from "../../Shared/Sidebar.jsx";

export default function AdminLayout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                {children}
            </div>
        </>
    )
}