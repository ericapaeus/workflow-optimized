'use server'

import { type LoginFormData } from '@/lib/validations/auth'
import type { ActionResponse } from '@/types/actions'

export async function loginAction(
  data: LoginFormData
): Promise<ActionResponse> {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) throw new Error(result.error)

    return result
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : '登录失败，请检查邮箱和密码',
    }
  }
}
