import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>oh no</h1>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default ErrorPage;