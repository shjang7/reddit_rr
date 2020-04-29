import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layouts/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'
import { getPosts } from '../../actions/post'

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="text-success font-weight-bolder">Posts</h1>
      <p className="lead">
        <i className="fas fa-user" />
        Welcome to the community
      </p>
      <PostForm />
      {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
    </>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post,
})

export default connect(
  mapStateToProps,
  { getPosts },
)(Posts)
