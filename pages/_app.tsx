import { SpeedInsights } from "@vercel/speed-insights/next";
import { FirebaseTrackingProvider } from "../firebase/FirebaseProvider";
import "../styles/index.scss";
// This default export is required in a new `pages/_app.js` file.

interface MyAppProps {
  Component: React.FC,
  pageProps?: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <FirebaseTrackingProvider>
    <Component {...pageProps} />
    <SpeedInsights />
  </FirebaseTrackingProvider>;
}
export default MyApp;