import React from "react"
import Layout from "../components/layout/layout.component"
import "./index.css"

const NotFound = () => {
  return (
    <Layout>
      <div id="error-page">
        <section id="text-error-page">
          <div className="container">
            <div className="row">
              <div className="content">
                <h1 className="big">404</h1>
                <p className="light-paragraph">
                  The page you are looking for could not be found
                </p>
                <a href="index.html" className="btn white">
                  Home page
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
