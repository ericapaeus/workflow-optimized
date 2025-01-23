import { loginSchema } from '@/lib/validations/auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = loginSchema.parse(body)

    // TODO: 实现实际的登录逻辑
    // 例如: 验证用户凭据、生成令牌等

    console.debug('login', validatedData)

    return NextResponse.json({
      success: true,
      data: { message: '登录成功' },
    })
  } catch (error) {
    console.error('login error', error)
    return NextResponse.json(
      {
        success: false,
        error: '登录失败，请检查邮箱和密码',
      },
      { status: 400 }
    )
  }
}
