import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { firebaseConfig } from ".";


const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseContext = createContext<any>(null);

export const FirebaseTrackingProvider = (props: { children: ReactNode }) => {
  const router = useRouter();
  const [tracking, setTracking] = useState<Analytics | undefined>(undefined);

  useEffect(() => {
    setTracking(getAnalytics(firebaseApp));
    const handleRouteChange = (url: string) => {
      if (!tracking) {
        return;
      }
      logEvent(tracking, 'page_view', {
        page_location: url,
        page_title: document?.title,
      });
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [tracking]);

  return <FirebaseContext.Provider value={{ tracking }} >
    {props.children}
  </FirebaseContext.Provider>
}