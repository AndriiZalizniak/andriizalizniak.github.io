import React from "react"
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <>
    <div className="az-404-page-wrap">
      <div className="az-404-page">
        <h1>404 <br/> Page not found :(</h1>
        <p>We will find this page soon, our best employees are doing it</p>
        <p><Link to={'/'}>Go to main</Link></p>
      </div>
    </div>
  </>
)

export default NotFoundPage;
