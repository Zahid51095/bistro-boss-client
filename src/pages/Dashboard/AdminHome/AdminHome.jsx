import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div><h2 className="text-3xl"></h2>
            <span>Hi, Welcome </span>
            {
                user?.displayName ? user.displayName : 'Back'
            }
            
        </div>
    );
};

export default AdminHome;