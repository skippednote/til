import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export const TILS_PATH = path.join(process.cwd(), "tils");

export const tilFilePaths = fs
  .readdirSync(TILS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const tilsBasedOnParam = (param) =>
  tilFilePaths
    .map((p) => path.join(TILS_PATH, p))
    .map((path) => fs.readFileSync(path))
    .map((source) => {
      const { data } = matter(source);
      return data[param];
    })
    .map((slug) => ({ params: { slug } }));

export const tilsFilteredOnParam = async (param, slug) => {
  const tils = [];

  for (const tilFilePath of tilFilePaths) {
    const absPath = path.join(TILS_PATH, tilFilePath);
    const fileContent = fs.readFileSync(absPath);
    const { data, content } = matter(fileContent);
    const mdxSource = await serialize(content, { scope: data });
    const til = {
      data,
      content: mdxSource,
    };
    if (data[param] === slug) {
      tils.push(til);
    }
  }

  return tils;
};
