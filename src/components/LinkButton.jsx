import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from 'prop-types';

const LinkButton = ({ path, label, type, action }) => {
  return (
    <Link to={path}>
      <Button label={label} type={type} action={action}/>
    </Link>
  )
}

LinkButton.PropTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    action: PropTypes.func,
}

export default LinkButton;
