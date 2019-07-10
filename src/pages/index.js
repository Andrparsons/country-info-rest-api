import React, { Component } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CountryCard from "../components/country-card"

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
        <>
          {this.state.loading ? (
            <p>Hang on, Loading...</p>
          ) : this.state.error ? (
            <p>Something has gone wrong</p>
          ) : (
            <>
              {this.state.countries.map(country => (
                <CountryCard key={country.alpha3Code} country={country} />
              ))}
            </>
          )}
        </>
      </Layout>
    )
  }

  fetchCountryList = () => {
    this.setState({ loading: true })
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        this.setState({ countries: response.data, loading: false })
        console.log(this.state.countries)
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, error })
      })
  }
}

export default IndexPage
