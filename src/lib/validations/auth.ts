import * as z from 'zod'

// 登录表单验证模式
export const loginSchema = z.object({
  email: z.string().email({
    message: '请输入有效的邮箱地址',
  }),
  password: z.string().min(6, {
    message: '密码至少需要6个字符',
  }),
})

export type LoginFormData = z.infer<typeof loginSchema>
