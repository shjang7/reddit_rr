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
    <>
      <form onSubmit={ handleSubmitLocal }>
        <textarea placeholder="write a comment" type="text" name="body" value={ body } onChange={ handleChange } className="form-control" />
        <button className="btn btn-primary form-control" type="submit">{ submitBtn }</button>
      </form>
      <div>{ blank ? 'Fill in comment body' : '' }</div>
    </>
  )
}

CommentForm.propTypes = {
  submitBtn: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
