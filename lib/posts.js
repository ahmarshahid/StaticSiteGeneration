import matter from 'gray-matter';  // Import gray-matter for Markdown parsing

export function getPostData() {
  // Move fs and path imports inside the function, so they are only called server-side
  const fs = require('fs');
  const path = require('path');

  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents); // Parse the front matter and content

  return {
    data,
    content
  };
}
