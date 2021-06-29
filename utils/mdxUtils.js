import fs from 'fs'
import path from 'path'

// TILS_PATH is useful when you want to get the path to a specific file
export const TILS_PATH = path.join(process.cwd(), 'tils')

// tilFilePaths is the list of all mdx files inside the TILS_PATH directory
export const tilFilePaths = fs
  .readdirSync(TILS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
