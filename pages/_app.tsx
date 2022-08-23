import { CssVarsProvider } from "@mui/joy/styles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { DefaultTheme } from "../theme";

// Route change progress bar
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <CssVarsProvider theme={DefaultTheme}>
        <Component {...pageProps} />
      </CssVarsProvider>
    </SessionProvider>
  );
}

export default MyApp;
