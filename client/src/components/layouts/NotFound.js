import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div class="not_found">
      <h1 class="not_found__title">404 Error</h1>
      <div class="not_found__link-container">
        <a href="/" class="not_found__more-link">
          Redirect to root
        </a>
      </div>
      <section class="not_found__error-container">
        <span>4</span>
        <span>
          <span class="not_found__screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <p class="not_found__zoom-area">
        <b>Sorry,</b> Not found a given link page.{' '}
      </p>
    </div>
  )
}

export default NotFound
