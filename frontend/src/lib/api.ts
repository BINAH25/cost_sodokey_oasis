/**
 * Tiny API helper for talking to the Django backend.
 *
 * The base URL comes from VITE_API_URL (see .env). It defaults to the local
 * Django dev server so `npm run dev` works out of the box.
 */
const API_URL = (import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000').replace(/\/$/, '');

export interface AppointmentPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  date?: string;
  time?: string;
  message?: string;
}

export interface FeedbackPayload {
  name: string;
  rating: number;
  message: string;
}

export interface PublishedFeedback {
  id: number;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

/** Thrown when the API responds with a non-2xx status. */
export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

async function post<T>(path: string, body: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ApiError('Network error. Please check your connection and try again.', 0, null);
  }

  if (!res.ok) {
    let details: unknown = null;
    try {
      details = await res.json();
    } catch {
      /* response had no JSON body */
    }
    const message =
      res.status === 429
        ? 'Too many requests. Please try again in a little while.'
        : 'Something went wrong. Please try again.';
    throw new ApiError(message, res.status, details);
  }

  return res.json() as Promise<T>;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) {
    throw new ApiError('Request failed.', res.status, null);
  }
  return res.json() as Promise<T>;
}

export const createAppointment = (payload: AppointmentPayload) =>
  post<AppointmentPayload & { id: number }>('/api/appointments/', payload);

export const createFeedback = (payload: FeedbackPayload) =>
  post<FeedbackPayload & { id: number }>('/api/feedback/', payload);

/** Fetch published testimonials. DRF may return a plain array or a paginated object. */
export const listFeedback = async (): Promise<PublishedFeedback[]> => {
  const data = await get<PublishedFeedback[] | { results: PublishedFeedback[] }>('/api/feedback/');
  return Array.isArray(data) ? data : data.results;
};
