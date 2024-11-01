
import { useSelector } from "react-redux";

export default function FacultyContent({ children }: {children: any}) {
    const { userRole } = useSelector((state: any) => state.accountReducer);

    if (userRole === "FACULTY") {
        return children;
    } else {
        return null;
    }
}