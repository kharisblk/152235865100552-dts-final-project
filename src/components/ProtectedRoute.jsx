import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../authentication/Firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
    const [user, isLoading] = useAuthState(auth);
    if (isLoading) {
        return;
    }

    if (!user && loginOnly) {
        return <Navigate to="/signin" />;
    }

    if (user && !loginOnly) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;