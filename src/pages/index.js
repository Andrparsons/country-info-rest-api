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
        <div>
          {this.state.loading ? (
            <p>Hang on, Loading...</p>
          ) : this.state.error ? (
            <p>Something has gone wrong</p>
          ) : (
            <>
              <p>It works!</p>
              <ul>
                {this.state.countries.map(country => (
                  <li>{country.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
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
