import { TServerError } from '@/types/types';

interface ApiErrorOptions extends ErrorOptions {
  status?: number;
}

class ApiError extends Error {
  status: number;
  constructor(message: string, options?: ApiErrorOptions) {
    super(message, { cause: options?.cause });
    this.status = options?.status as number;
  }
}

export async function getApiError(response: Response) {
  const body = await response.json();

  return new ApiError(body.message || 'server_error', {
    status: body?.status,
  }) as TServerError;
}

export enum LINKS {
  LOGIN = '/login',
  HOME = '/',
  REGISTER = '/sign-up',
  REGISTER_VERIFY = '/verify',
  PEOPLE = '/people',
  PROFILE = '/profile',
  VERIFY = '/verify',

  CHATS = '/chats',
  PARTNER_SUGGESTION = '/partnersuggestions',
  NEAR_ME = '/partnersuggestions/near-me',
  FAVORITES = '/partnersuggestions/favorites',
  VISTTORS_TO_MY_PROVIFILE = '/partnersuggestions/profile-visitors',
  VISITED_PROFILES = '/partnersuggestions/visited-profiles',
  QUESTIONS='/qa'

  // Profiles I have visited
}

export const sitesRoutes = [
  LINKS.LOGIN,
  LINKS.REGISTER,
  LINKS.REGISTER_VERIFY,
  LINKS.HOME,
  LINKS.PARTNER_SUGGESTION,
  LINKS.CHATS,
  LINKS.NEAR_ME,
  LINKS.FAVORITES,
  LINKS.VISTTORS_TO_MY_PROVIFILE,
  LINKS.VISITED_PROFILES,
  LINKS.VERIFY
];


export function isStringNumber(str: string): boolean {
  return !isNaN(parseFloat(str));
}