import { NextResponse } from 'next/server'
import { workflows } from '@/data/workflows'

export async function GET() {
  return NextResponse.json(workflows)
} 