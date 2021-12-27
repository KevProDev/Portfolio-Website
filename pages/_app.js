import "tailwindcss/tailwind.css";
import "./styles/globals.css";
import head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <meta property="og:title" content="Kevin Johnson Portfilo" />
        <meta
          property="og:description"
          content="Solving Business Problems with Code"
        />
        <meta property="og:image" content="https://imgur.com/a/7o5PdJ3" />
      </head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
