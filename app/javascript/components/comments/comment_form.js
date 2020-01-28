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
    handleSubmit({ body });
  }

  return (
    <div>
      <form onSubmit={ handleSubmitLocal }>
        <div>
          <textarea placeholder="write a comment" type="text" name="body" value={ body } onChange={ handleChange } />
        </div>
        <div>
          <button type="submit">{ submitBtn }</button>
        </div>
      </form>
      <div>{ blank ? 'Fill in comment body' : '' }</div>
    </div>
  )
}

export default CommentForm;
