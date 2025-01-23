export async function fetchApi<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('API request failed')
  }
  return response.json()
} 