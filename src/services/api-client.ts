interface FetchOptions extends RequestInit {
  params?: Record<string, string>
}

export async function fetchApi<T>(
  endpoint: string,
  { params, ...options }: FetchOptions = {}
): Promise<T> {
  const url = new URL(endpoint, window.location.origin)
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || '请求失败')
  }

  return data
} 