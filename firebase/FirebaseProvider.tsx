import firebase from "firebase";
import "firebase/analytics";
import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { firebaseConfig } from ".";

if (typeof window !== 'undefined' && firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext = createContext<any>(null);

export const FirebaseTrackingProvider = (props: { children: ReactNode }) => {
  const router = useRouter();
  const [tracking, setTracking] = useState<firebase.analytics.Analytics | undefined>(undefined);

  useEffect(() => {
    setTracking(firebase.analytics());
    const handleRouteChange = (url: string) => {
      if (!tracking) {
        return;
      }
      tracking.logEvent('page_view', {
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