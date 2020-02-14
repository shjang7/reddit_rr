import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ submitBtn, handleSubmit }) => {
  const [body, setBody] = useState('');
  const [blank, setBlank] = useState(false);

  useEffect(() => {
    if (body) setBlank(false);
  }, [body]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'body') setBody(value);
  }

  const handleSubmitLocal = (event) => {
    event.preventDefault();
    if (!body) {
      setBlank(true);
      return;
    }
    if (!handleSubmit({ body })) {
      setBlank(true);
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmitLocal }>
        <div>
          <textarea placeholder="write a comment" type="text" name="body" value={ body } onChange={ handleChange } />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            { submitBtn }
          </button>
        </div>
      </form>
      <div>{ blank ? 'Fill in comment body' : '' }</div>
    </div>
  )
}

CommentForm.propTypes = {
  submitBtn: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
