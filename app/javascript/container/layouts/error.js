import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';

const Error = ({ errors }) => {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    setMsg(errors);
    setTimeout(() => { setMsg('') }, 3000);
  }, [errors]);

  return <div className="error_message">{ msg }</div>;
};

Error.propTypes = {
  errors: PropTypes.string
}

export default connect(({ errors }) => ({ errors }), null)(Error);
