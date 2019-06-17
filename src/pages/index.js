import React, { Component } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      countries: [],
    }
  }

  componentDidMount() {
    this.fetchCountryList()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }

  fetchCountryList = () => {
    this.setState({ loading: true })
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({ countries: response.data, loading: false })
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, error })
      })
  }
}

export default IndexPage
