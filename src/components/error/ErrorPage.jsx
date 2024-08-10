import { useRouteError } from "react-router-dom";
import LinkButton from "../LinkButton";

const ErrorPage = () => {
    const {status, statusText, data} = useRouteError();

  return (
    <div className="container">
        <div className="errorDiv">
            <h1>{status}</h1>
            <h3>{statusText}</h3>
            <p>{data}</p>
            <LinkButton path="/home" label="Go Home"/>
        </div>
    </div>
  )
}

export default ErrorPage
