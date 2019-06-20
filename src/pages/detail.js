import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

export class DetailPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Country" />
        {console.log(this.props.location.state.country)}
        <h1>Testing</h1>
        <h2>{this.props.location.state.country.name}</h2>
      </Layout>
    )
  }
}

export default DetailPage
