export interface InquiryPayload {
  full_name: string;
  email: string;
  phone?: string;
  country?: string;
  group_size?: string;
  preferred_month?: string;
  tour_interest?: string;
  message: string;
}

export interface ReviewPayload {
  name: string;
  country: string;
  review_text: string;
  rating?: number;
}

export interface PublicReview {
  id: string;
  name: string;
  country: string;
  review_text: string;
  rating: number;
  created_at?: string;
}

const viteEnv = (import.meta as ImportMeta & { env?: Record<string, string> }).env;
const API_BASE = viteEnv?.VITE_API_BASE_URL ?? 'https://metll-backend-1.onrender.com';
const MODULE_BASE = '/api/v1/bodhi-holy-tour';

function buildUrl(path: string): string {
  return `${API_BASE}${MODULE_BASE}${path}`;
}

async function parseJsonResponse<T>(res: Response): Promise<T> {
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data?.success) {
    const message = data?.error?.message || data?.message || 'Request failed';
    throw new Error(message);
  }
  return data as T;
}

export async function submitInquiry(payload: InquiryPayload): Promise<{ id: string }> {
  const res = await fetch(buildUrl('/inquiries'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await parseJsonResponse<{ data?: { id?: string } }>(res);
  return { id: data.data?.id ?? '' };
}

export async function submitReview(payload: ReviewPayload): Promise<void> {
  const res = await fetch(buildUrl('/reviews'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  await parseJsonResponse<{ message?: string }>(res);
}

export async function fetchApprovedReviews(page = 1, limit = 30): Promise<PublicReview[]> {
  const qs = new URLSearchParams({ page: String(page), limit: String(limit) });
  const res = await fetch(buildUrl(`/reviews?${qs.toString()}`));
  const data = await parseJsonResponse<{ data?: { items?: PublicReview[] } }>(res);
  return data.data?.items ?? [];
}
