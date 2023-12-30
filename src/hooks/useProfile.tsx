'use client';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getProfile } from '@/app/api/profile/route';
import { TServerError } from '@/types/types';
import { UserData } from '@/types/apiTypes';
import { AuthStatus } from '@/types/types';

export const PROFILE_QUERY_KEY = 'profile';
export function useProfile(
  { retry, retryOnMount, refetchOnWindowFocus } = {
    retry: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  }
) {
  return useQuery<UserData, TServerError>({
    queryKey: [PROFILE_QUERY_KEY],
    queryFn: getProfile,
    retry,
    refetchOnWindowFocus,
    retryOnMount,
  });
}

/**
 *
 * "status = initial-loading" when profile query hasn't fetched yet
 *
 * "status = logged-out" when query has fetched at least once
 * and current state of query is error and there is no data in cache.
 * (this will remain false when refetching a logged out user)
 *
 * "status = logged-in" when profile query has fetched at least once
 * and the last request was a success (this therefore could be true when query is loading / refetching)
 *
 */
export function authStatusFromProfileQuery({
  isFetched,
  isError,
  data,
}: {
  isFetched: boolean;
  isError: boolean;
  data: UserData;
}) {
  let status = AuthStatus.INITIAL_LOADING;

  if (isFetched && (!data || isError)) {
    status = AuthStatus.LOGGED_OUT;
  } else if (isFetched && data) {
    status = AuthStatus.LOGGED_IN;
  }

  return {
    isInitialLoading: status === AuthStatus.INITIAL_LOADING,
    isLoggedIn: status === AuthStatus.LOGGED_IN,
    isLoggedOut: status === AuthStatus.LOGGED_OUT,
    status,
  };
}

export default useProfile;
