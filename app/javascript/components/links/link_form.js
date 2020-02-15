import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LinkForm = ({ headTitle, submitBtn, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [blank, setBlank] = useState(false);

  useEffect(() => {
    if (title && url) setBlank(false);
  }, [title, url]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    else if (name === 'url') setUrl(value);
  }

  const handleSubmitLocal = (event) => {
    event.preventDefault();
    if (!title || !url) {
      setBlank(true);
      return;
    }
    handleSubmit({ title, url });
    setTitle('');
    setUrl('');
  }

  return (
    <div>
      <h1>{ headTitle }</h1>
      <form onSubmit={ handleSubmitLocal }>
        <input placeholder="title" type="text" name="title" value={ title } onChange={ handleChange } />
        <input placeholder="url" type="text" name="url" value={ url } onChange={ handleChange } />
        <button className="btn btn-primary" type="submit">
          { submitBtn }
        </button>
      </form>
      <div>{ blank ? 'Fill in with title and url' : '' }</div>
    </div>
  )
}

LinkForm.propTypes = {
  headTitle: PropTypes.string.isRequired,
  submitBtn: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default LinkForm;
