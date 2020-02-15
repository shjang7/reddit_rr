import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkForm from '../../components/links/link_form';
import { updateLinks } from '../../actions';

const EditLinks = (props) => {
  const { match: { params: { id: linkId }}, links: { link }, updateLinks, history, location } = props;

  const redirect = () => {
    history.push('/');
  }

  const handleSubmit = async (linkData) => {
    console.log('submit', linkData);
    await updateLinks(linkId, linkData);
    redirect();
  }
  console.log('link', link)

  return (
    <LinkForm headTitle='Edit Link' submitBtn='Update' handleSubmit={ handleSubmit } link={link} />
  )
}

EditLinks.defaultProps = { history: '/'};

EditLinks.propTypes = {
  updateLinks: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  history: PropTypes.object
}

export default connect(({ links }) => ({ links }), { updateLinks })(EditLinks);
