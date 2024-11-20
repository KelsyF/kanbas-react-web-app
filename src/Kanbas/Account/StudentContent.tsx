
import { useSelector } from "react-redux";

export default function StudentContent({ children }: {children: any}) {
    const { userRole } = useSelector((state: any) => state.accountReducer);

    if (userRole === "STUDENT") {
        return children;
    } else {
        return null;
    }
}