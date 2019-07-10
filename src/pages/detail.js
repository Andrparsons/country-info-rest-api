import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CountryDetail from "../components/country-detail"

export class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      key: this.props.location.state.country.alpha3Code,
      country: false,
    }
  }

  componentDidMount() {
    this.fetchCountryDetails()
  }

  render() {
    return (
      <Layout>
        <SEO title="Country" />
        <h2>{this.state.country.name}</h2>
        <>
          {this.state.loading ? (
            <p>Hang on, Loading...</p>
          ) : this.state.error ? (
            <p>Something has gone wrong</p>
          ) : (
            <CountryDetail country={this.state.country} />
          )}
        </>
      </Layout>
    )
  }

  fetchCountryDetails = () => {
    this.setState({ loading: true })
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${this.state.key}`)
      .then(response => {
        this.setState({ country: response.data, loading: false })
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false, error })
      })
  }
}

export default DetailPage
