import { marked } from 'marked'

export async function markdownToHtml(markdown: string) {
  return marked(markdown, {
    gfm: true, // 启用 GitHub Flavored Markdown
    breaks: true, // 启用换行符转换为 <br>
  })
}
