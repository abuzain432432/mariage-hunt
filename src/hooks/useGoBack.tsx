'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const useGoBack = (): ((
  pathsToAvoid?: string[],
  goTo?: string
) => void) => {
  const router = useRouter();
  const [previousPath, setPreviousPath] = useState<string>('');

  // useEffect(() => {
  //   setPreviousPath(router.);
  // }, [router.asPath]);

  const goBack = useCallback(
    (pathsToAvoid?: string[], goTo?: string) => {
      if (goTo) {
        return router.push(goTo);
      }
      if (pathsToAvoid?.includes(previousPath)) {
        return router.push('/');
      }
      router.back();
    },
    [previousPath, router]
  );

  return goBack;
};

export default useGoBack;
