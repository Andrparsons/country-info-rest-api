import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const CountryCard = ({ country }) => (
  <div className="country-card">
    <Link to="/detail/" state={{ country: country }}>
      <div
        className="country-flag"
        style={{ backgroundImage: `url(${country.flag})` }}
      />
      <h3>{country.name}</h3>
      <h4>Population</h4>
      <p>{country.population}</p>
      <h4>Region</h4>
      <p>{country.region}</p>
      <h4>Capital</h4>
      <p>{country.capital}</p>
    </Link>
  </div>
)

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
}

export default CountryCard
