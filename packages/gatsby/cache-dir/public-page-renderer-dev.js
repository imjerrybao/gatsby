import React from "react"
import PropTypes from "prop-types"

import pages from "./pages.json"
import loader from "./loader"
import JSONStore from "./json-store"

const DevPageRenderer = ({ location }) => {
  const pageResources = loader.getResourcesForPathname(location.pathname)
  return React.createElement(JSONStore, {
    pages,
    location,
    pageResources,
  })
}

DevPageRenderer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default DevPageRenderer
