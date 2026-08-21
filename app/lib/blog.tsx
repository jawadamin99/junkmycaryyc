import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import React from "react";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  primaryKeyword?: string;
  coverImage?: string;
  coverImageAlt?: string;
  content: string;
};

const blogDir = path.join(process.cwd(), "content", "blog");

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: raw };
  }

  const [, frontmatter, content] = match;
  const data: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }

  return { data, content };
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(raw);

  if (!data.title || !data.metaTitle || !data.metaDescription || !data.description) {
    return null;
  }

  return {
    slug,
    title: data.title,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    description: data.description,
    primaryKeyword: data.primaryKeyword,
    coverImage: data.coverImage,
    coverImageAlt: data.coverImageAlt,
    content: content.trim(),
  };
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null);
}

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={`${token}-${match.index}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      const splitIndex = token.indexOf("](");
      const label = token.slice(1, splitIndex);
      const href = token.slice(splitIndex + 2, -1);

      nodes.push(
        <Link key={`${token}-${match.index}`} href={href} className="content-link">
          {label}
        </Link>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function renderMdxContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let index = 0;

  const flushParagraph = (paragraphLines: string[]) => {
    if (!paragraphLines.length) {
      return;
    }

    nodes.push(
      <p key={`p-${nodes.length}`}>
        {renderInline(paragraphLines.join(" ").trim())}
      </p>,
    );
  };

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      nodes.push(<h1 key={`h1-${nodes.length}`}>{line.slice(2).trim()}</h1>);
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      nodes.push(<h2 key={`h2-${nodes.length}`}>{line.slice(3).trim()}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      nodes.push(<h3 key={`h3-${nodes.length}`}>{line.slice(4).trim()}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      nodes.push(
        <blockquote key={`blockquote-${nodes.length}`}>
          <p>{renderInline(line.slice(2).trim())}</p>
        </blockquote>,
      );
      index += 1;
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];

      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ""));
        index += 1;
      }

      nodes.push(
        <ol key={`ol-${nodes.length}`}>
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];

      while (index < lines.length && /^[-*]\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s/, ""));
        index += 1;
      }

      nodes.push(
        <ul key={`ul-${nodes.length}`}>
          {items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraphLines: string[] = [];

    while (index < lines.length) {
      const current = lines[index].trim();

      if (
        !current ||
        current.startsWith("# ") ||
        current.startsWith("## ") ||
        current.startsWith("### ") ||
        current.startsWith("> ") ||
        /^\d+\.\s/.test(current) ||
        /^[-*]\s/.test(current)
      ) {
        break;
      }

      paragraphLines.push(current);
      index += 1;
    }

    flushParagraph(paragraphLines);
  }

  return nodes;
}
