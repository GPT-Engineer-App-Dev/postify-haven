import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post. It can be much longer and include multiple paragraphs.', date: '2023-04-01' },
  { id: 2, title: 'Reflections on Web Development', content: 'Web development is an exciting field with constant innovations. This post could dive deep into various aspects of web development.', date: '2023-04-15' },
  { id: 3, title: 'The Importance of User Experience', content: 'User experience is crucial in modern web design. This post could explore different UX principles and their impact on web design.', date: '2023-05-01' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center mt-8">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
        <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
