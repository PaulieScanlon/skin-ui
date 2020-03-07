const anchorScroll = location => {
  // only get the anchors that aren't part of the nav. h5 is importatnt here, check the linked headings in mdx
  const anchor = document.querySelectorAll(`h5 > a[href="${location.hash}"]`)[0]

  if (location && location.hash && anchor) {
    // as above
    const item = document.querySelectorAll(`h5 > a[href="${location.hash}"]`)[0]
      .offsetTop

    const mainNavHeight = document.querySelector(`header`).offsetHeight * 2.2

    setTimeout(() => {
      window.scrollTo({
        top: item - mainNavHeight,
        behavior: "smooth",
      })
    }, 50)
  }
}

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location && location.action === "PUSH") {
    setTimeout(() => window.scrollTo({ top: 0 }), 250)
  }

  anchorScroll(location)
  return false
}

exports.onRouteUpdate = ({ location }) => {
  anchorScroll(location)
  return true
}
