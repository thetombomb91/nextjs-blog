// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (process.env.ENVIRONMENT !== "dev") {
    window.gtag('config', 'UA-101030398-1', {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (process.env.ENVIRONMENT !== "dev") {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}