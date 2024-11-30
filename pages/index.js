import { getPostData } from '../lib/posts';  // Import the function to get post data
import {remark} from 'remark';
import remarkHtml from 'remark-html';

export default function Home({ post }) {
  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticProps() {
  const post = getPostData();


  const htmlContent = await remark().use(remarkHtml).process(post.content);

  return {
    props: {
      post: {
        data: post.data,
        content: htmlContent.toString()
      },
    },
  };
}
