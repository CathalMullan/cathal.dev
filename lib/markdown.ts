import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import path from "path";

export interface MarkdownFile {
  id: string;
  folder: string;
  url: string;
  content: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const articlesDirectory = path.join(process.cwd(), "articles");

export function gatherMarkdownMetadata(filePath: string) {
  const fileName = path.basename(filePath);
  const id = fileName.replace(/[.]md$/, "");

  const relativePath = path.relative(articlesDirectory, filePath);
  const url = relativePath.replace(/[.]md$/, "");

  const relativeFolder = path.dirname(relativePath);
  const folder = path.basename(relativeFolder);

  const article = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(article);

  return {
    id,
    folder,
    url,
    content,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
  };
}

export function fetchMarkdownFiles(directory: string): MarkdownFile[] {
  const markdownDirectory = path.join(articlesDirectory, directory);
  const markdownFileNames = glob.sync(`${markdownDirectory}/**/*.md`);
  return markdownFileNames.map((filePath) => gatherMarkdownMetadata(filePath));
}

export function fetchMarkdownFilesByTags(tags: string[]): MarkdownFile[] {
  return fetchMarkdownFiles(".").filter((file) => file.tags.some((file_tag) => tags.includes(file_tag)));
}

export function fetchMarkdownFile(file: string): MarkdownFile {
  const filePath = path.join(articlesDirectory, file);
  return gatherMarkdownMetadata(filePath);
}

export function fetchMarkdownTags() {
  const markdownFiles = fetchMarkdownFiles(".");

  const markdownTags = new Set<string>();
  markdownFiles.forEach((file) => {
    file.tags.forEach((tag) => {
      markdownTags.add(tag);
    });
  });

  return Array.from(markdownTags).sort();
}
