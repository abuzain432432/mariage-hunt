import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LINKS } from '@/util';
import { AuthStatus, Url } from '@/types/types';

import usePrevious from './usePrevious';
import { authStatusFromProfileQuery, useProfile } from './useProfile';

/**
 * Redirect if user logged in. /home by default.
 */
export function useLoggedInCheck(url: Url = LINKS.DASHBOAED) {
  const router = useRouter();
  const profile = useProfile();
  const { status } = authStatusFromProfileQuery(profile as any);
  const prevStatus = usePrevious(status);

  // Redirect to home if already logged in
  useEffect(() => {
    if (
      prevStatus === AuthStatus.INITIAL_LOADING &&
      status === AuthStatus.LOGGED_IN
    ) {
      router.push(url);
    }
  }, [status, prevStatus, router, url]);

  return status;
}
