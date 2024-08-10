import { Link, useRouteError } from "react-router-dom";
import Button from "./Button";

const ErrorPage = () => {
    const {status, statusText, data} = useRouteError();

  return (
    <div className="container">
        <div className="errorDiv">
            <h1>{status}</h1>
            <h3>{statusText}</h3>
            <p>{data}</p>
            <Link to="/Project-Shopping-Cart/home">
                <Button label="Go Home"/>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage
