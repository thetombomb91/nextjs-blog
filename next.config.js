const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})



module.exports = {
  target: 'serverless',
  future: {
    webpack5: true,
  },

  async redirects() {
    return [
      {
        source: '/now',
        destination: '/posts/now',
        permanent: true,
      },
      {
        source: '/2019/11/13/app-module-vs-core-module-vs-shared-module-vs-feature-modules-in-angular',
        destination: '/posts/app-core-shared-feature-modules',
        permanent: true,
      },
      {
        source: '/2016/10/13/arches-national-park-canyon-lands-national-park-utah-september-2016',
        destination: '/posts/arches-national-park-canyonlands-utah',
        permanent: true,
      },
      {
        source: '/2017/06/15/backpacking-the-lost-coast-trail',
        destination: '/posts/backpacking-lost-coast',
        permanent: true,
      },
      {
        source: '/2020/12/09/experience-backpacking-the-trans-catalina-trail-avalon-to-two-harbors',
        destination: '/posts/backpacking-trans-catalina-trail-california',
        permanent: true,
      },
      {
        source: '/2020/07/27/must-have-vs-code-extensions-for-angular-typescript',
        destination: '/posts/must-have-vscode-extensions',
        permanent: true,
      },
      {
        source: '/2020/09/04/comparing-null-and-undefined-in-javascript',
        destination: '/posts/comparing-null-and-undefined-javascript',
        permanent: true,
      },
      {
        source: '/2016/12/31/palm-canyon-backpacking-trip',
        destination: '/posts/palm-canyon-backpacking',
        permanent: true,
      },
      {
        source: '/2017/01/24/mud-caves',
        destination: '/posts/arroyo-tapiado-mud-caves',
        permanent: true,
      },
      {
        source: '/2019/07/27/asp-net-core-api-course-in-the-works',
        destination: '/posts/asp-net-course',
        permanent: true,
      },
      {
        source: '/2020/08/21/const-in-javascript-is-weird-the-non-immutable-const',
        destination: '/posts/const-in-javascript-is-weird',
        permanent: true,
      },
      {
        source: '/2019/11/05/creating-a-c-asp-net-core-api-course-now-available-on-thinkster-io',
        destination: '/posts/c-sharp-asp-net-core-course-available',
        permanent: true,
      },
      {
        source: '/2019/08/27/creating-quality-with-mob-programming-talk-at-pnsqc-2019',
        destination: '/posts/creating-quality-mob-programming-pnsqc',
        permanent: true,
      },
      {
        source: '/2017/12/14/going-right-mob-programming-benefits-part-4',
        destination: '/posts/mob-programming-benefits-part-4',
        permanent: true,
      },
      {
        source: '/2017/07/12/going-right-mob-programming-part-2',
        destination: '/posts/mob-programming-benefits-part-2',
        permanent: true,
      },
      {
        source: '/2017/04/03/how-to-test-your-eventwaithandle-c',
        destination: '/posts/testing-eventwaithandle',
        permanent: true,
      },
      {
        source: '/2019/10/31/i-am-a-podcaster-now',
        destination: '/posts/i-am-a-podcaster',
        permanent: true,
      },
      {
        source: '/2020/07/29/managing-your-rxjs-observable-subscriptions-in-angular-with-subsink',
        destination: '/posts/managing-observables-with-subsink',
        permanent: true,
      },
      {
        source: '/2017/07/18/microsoft-cognitive-services-emotion-api-first-impressions',
        destination: '/posts/microsoft-cognitive-services-emotion-api',
        permanent: true,
      },
      {
        source: '/2017/04/19/mob-programming-moving-from-a-multi-mob-project-to-a-single-mob-project-and-the-sense-of-accomplishment',
        destination: '/posts/mob-programming-multi-mob-to-single-mob',
        permanent: true,
      },
      {
        source: '/2018/08/01/my-first-mobile-app-motorcycle-riding-weather',
        destination: '/posts/my-first-mobile-app-motorcycle-weather-ride',
        permanent: true,
      },
      {
        source: '/2017/02/01/palomar-mountain-snow-hiking',
        destination: '/posts/palomar-mountain-snow-hiking',
        permanent: true,
      },
      {
        source: '/2019/10/16/pnsqc-2019-talk-complete-creating-quality-with-mob-programming',
        destination: '/posts/pnsqc-talk-complete',
        permanent: true,
      },
      {
        source: '/2017/04/18/programming-better-and-easier-with-the-happy-path',
        destination: '/posts/programming-with-the-happy-path',
        permanent: true,
      },
      {
        source: '/2016/11/13/saturday-11132016-bike-ride',
        destination: '/posts/saturday-motorcycle-ride',
        permanent: true,
      },
      {
        source: '/2020/01/07/speaking-at-agile-devops-west-2020-conference',
        destination: '/posts/speaking-at-agile-devops-2020',
        permanent: true,
      },
      {
        source: '/2019/01/16/space-explorer-alexa-skill',
        destination: '/posts/space-explorer-alexa-skill',
        permanent: true,
      },
      {
        source: '/2020/09/09/stubbing-location-reload-in-angular-for-jasmine-tests',
        destination: '/posts/stubbing-location-reload-in-jasmine-tests',
        permanent: true,
      },
      {
        source: '/2017/03/08/the-basics-of-the-alexa-skill-intentschema',
        destination: '/posts/alexa-skill-intent-schema',
        permanent: true,
      },
      {
        source: '/2017/02/28/the-components-that-make-up-an-alexa-skill',
        destination: '/posts/components-of-an-alexa-skill',
        permanent: true,
      },
      {
        source: '/2018/09/27/the-shape-of-teams-when-mob-programming',
        destination: '/posts/shape-of-teams-mob-programming',
        permanent: true,
      },
      {
        source: '/2020/07/21/two-angular-10-projects-same-package-json-one-project-has-281-vulnerabilities-the-other-has-0',
        destination: '/posts/2-same-angular-projects-different-errors',
        permanent: true,
      },
      {
        source: '/2020/10/08/typescript-there-are-no-integers-😱',
        destination: '/posts/typescript-there-are-no-integers',
        permanent: true,
      },
      {
        source: '/2018/03/17/visual-studio-live-2018-las-vegas',
        destination: '/posts/visual-studio-live-vegas-2018',
        permanent: true,
      },
      {
        source: '/2019/02/19/weather-ride-a-motorcycle-riding-weather-app-ui-overhaul',
        destination: '/posts/weather-ride-app-ui-overhaul',
        permanent: true,
      },
      {
        source: '/2019/10/24/what-are-structural-directives-in-angular',
        destination: '/posts/structural-directives-in-angular',
        permanent: true,
      },
      {
        source: '/2017/03/18/what-is-going-right-mob-programming-part-1',
        destination: '/posts/mob-programming-benefits-part-1',
        permanent: true,
      },
      {
        source: '/2017/08/05/what-is-going-right-mob-programming-part-3',
        destination: '/posts/mob-programming-benefits-part-3',
        permanent: true,
      },
      {
        source: '/2019/10/22/what-is-test-driven-development-tdd',
        destination: '/posts/what-is-tdd',
        permanent: true,
      },
      {
        source: '/2019/04/12/weather-ride-hits-the-ios-app-store',
        destination: '/posts/posts/weather-ride-on-ios',
        permanent: true,
      },
      {
        source: '/2017/05/16/what-i-am-most-excited-about-after-attending-microsoft-build-2017',
        destination: '/posts/microsoft-build-2017',
        permanent: true,
      },
      {
        source: '/2018/05/17/make-it-work-make-it-right-make-it-fast',
        destination: '/posts/make-it-work-right-fast',
        permanent: true,
      },
    ]
  },
}