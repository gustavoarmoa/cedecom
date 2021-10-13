import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>

          <title>Cedecon Educação a distância</title>

          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>


          <link rel="shortcut icon" href="./assets/img/favicons/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="57x57" href="./assets/img/favicons/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="./assets/img/favicons/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="./assets/img/favicons/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/favicons/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="./assets/img/favicons/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="./assets/img/favicons/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="./assets/img/favicons/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="./assets/img/favicons/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/favicons/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="./assets/img/favicons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="./assets/img/favicons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="./assets/img/favicons/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="./assets/img/favicons/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>


          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap" rel="stylesheet"/>


          
          
          <link rel="stylesheet" href="./assets/vendor/font-awesome/css/all.min.css"/>
          <link rel="stylesheet" href="./assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"/>
          <link rel="stylesheet" href="./assets/vendor/dzsparallaxer/dzsparallaxer.css"/>
          <link rel="stylesheet" href="./assets/vendor/cubeportfolio/css/cubeportfolio.min.css" />
          <link rel="stylesheet" href="./assets/vendor/aos/dist/aos.css" />
          


          <link rel="stylesheet" href="./assets/css/theme.css" />
        </Head>
        <body>
          <Main />
          <NextScript />


          <script src="./assets/vendor/jquery/dist/jquery.min.js"></script>
          <script src="./assets/vendor/jquery-migrate/dist/jquery-migrate.min.js"></script>
          <script src="./assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

          <script src="./assets/vendor/hs-header/dist/hs-header.min.js"></script>
          <script src="./assets/vendor/hs-go-to/dist/hs-go-to.min.js"></script>
          <script src="./assets/vendor/hs-unfold/dist/hs-unfold.min.js"></script>
          <script src="./assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js"></script>
          <script src="./assets/vendor/hs-show-animation/dist/hs-show-animation.min.js"></script>
          <script src="./assets/vendor/hs-sticky-block/dist/hs-sticky-block.min.js"></script>
          <script src="./assets/vendor/hs-counter/dist/hs-counter.min.js"></script>
          <script src="./assets/vendor/appear.js"></script>
          <script src="./assets/vendor/cubeportfolio/js/jquery.cubeportfolio.min.js"></script>
          <script src="./assets/vendor/jquery-validation/dist/jquery.validate.min.js"></script>
          <script src="./assets/vendor/dzsparallaxer/dzsparallaxer.js"></script>
          <script src="./assets/vendor/aos/dist/aos.js"></script>

          <script src="./assets/js/hs.core.js"></script>
          <script src="./assets/js/hs.validation.js"></script>
          <script src="./assets/js/hs.cubeportfolio.js"></script>


          <script src="./assets/js/inicial1.js"></script>
          <script src="./assets/js/inicial2.js"></script>
          <script src="./assets/js/inicial3.js"></script>




        </body>
      </Html>
    );
  }
}

export default MyDocument;
