
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    console.log("Current user: ", currentUser);
    if (!currentUser) {
        return <Navigate to={"/Kanbas/Account/Signin"} />;
    }

    return children;
}