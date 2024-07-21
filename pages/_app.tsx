import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from "next/dynamic";
import { Inter } from 'next/font/google';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../src/components/helper/scroll-to-top";
import { FirebaseTrackingProvider } from "../src/firebase/FirebaseProvider";
import "../src/styles/main.css";

const DynamicHeader = dynamic(() => import('@components/header'), {
  loading: () => <Skeleton />,
})
const DynamicFooter = dynamic(() => import('@components/footer'), {
  loading: () => <Skeleton />,
})
// This default export is required in a new `pages/_app.js` file.

interface MyAppProps {
  Component: React.FC,
  pageProps?: any
}

const inter = Inter({ subsets: ['latin'] })
const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <>
    <FirebaseTrackingProvider>
      <ToastContainer />
      <DynamicHeader />
      <main id="main" className={`${inter.className} min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white`}>
        <Component {...pageProps} />
        <ScrollToTop />
      </main >
      <DynamicFooter />
      <SpeedInsights />
      <Analytics />
      <GoogleTagManager gtmId={process?.env?.NEXT_PUBLIC_GTM || ''} />
    </FirebaseTrackingProvider></>
}
export default MyApp;