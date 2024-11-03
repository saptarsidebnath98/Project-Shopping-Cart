import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({type="primary", label="Button", action}) => {
  return (
    <button 
    className={styles[type]}
    onClick={action}>
      {label}
    </button>
  )
}

//propType validation
Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    action: PropTypes.func,
}

export default Button
