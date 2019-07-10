import React from "react"
import PropTypes from "prop-types"

const CountryDetail = ({ country }) => (
  <div className="country-detail">
    <img src={country.flag} />
    <h1>{country.name}</h1>
    <h4>Native Name</h4>
    <p>{country.nativeName}</p>
    <h4>Population</h4>
    <p>{country.population}</p>
    <h4>Region</h4>
    <p>{country.region}</p>
    <h4>Sub Region</h4>
    <p>{country.subregion}</p>
    <h4>Capital</h4>
    <p>{country.capital}</p>
    <h4>Top Level Domain</h4>
    <p>{country.topLevelDomain}</p>
    <h4>Currencies</h4>
    <p>{country.currencies ? country.currencies[0].name : null}</p>
    <h4>Languages</h4>
    {country.languages
      ? country.languages.map(language => (
          <p key={language.name}>{language.name}</p>
        ))
      : null}
    <h2>Border Countries</h2>
    {country.borders
      ? country.borders.map(border => <p key={border}>{border}</p>)
      : null}
  </div>
)

export default CountryDetail
