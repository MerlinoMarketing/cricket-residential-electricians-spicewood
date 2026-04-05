import fs from "fs";
import path from "path";

export interface MarkdownBlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) data[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "");
  }
  return { data, content: match[2].trim() };
}

export function loadMarkdownBlogPosts(): MarkdownBlogPost[] {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];
  try {
    return fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      .map((file) => {
        const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
        const { data, content } = parseFrontmatter(raw);
        const slug = data.slug || file.replace(".md", "");
        return {
          slug,
          title: data.title || slug,
          description: data.description || "",
          date: data.date || "2026-01-01",
          readTime: data.readTime || "5 min read",
          category: data.category || data.service || "Guide",
          content,
        };
      });
  } catch {
    return [];
  }
}
