import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

// Blog Data
const blogs = [
  {
    id: 1,
    title: "How to Stay Fit",
    content: "Fitness is all about consistency and a balanced diet...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Web Development Trends 2025",
    content:
      "React, Next.js, and AI-powered development are shaping the future...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    content: "Closures are functions that have access to their outer scope...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 4,
    title: "Mastering CSS Grid and Flexbox",
    content: "CSS Grid and Flexbox make responsive design easier...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 5,
    title: "The Future of AI in Software Development",
    content: "AI tools are transforming how developers write and debug code...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 6,
    title: "Why TypeScript is Gaining Popularity",
    content:
      "TypeScript provides static typing to JavaScript, improving maintainability...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 7,
    title: "The Importance of Cybersecurity in 2025",
    content:
      "With increasing cyber threats, security practices are more crucial than ever...",
    image: "https://placehold.co/600x400",
  },
  {
    id: 8,
    title: "How to Build a Strong Personal Brand Online",
    content:
      "Creating content and engaging on social media can boost your personal brand...",
    image: "https://placehold.co/600x400",
  },
];
// BlogPost Component
const BlogPost = ({ post }) => {
  return (
    <div className="blog__blogsecond-list_post">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <a className="btn" href={`/blog/${post.id}`}>
        Read More
      </a>
    </div>
  );
};

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter blogs based on search input
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Generate dynamic pagination buttons
  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= 3) {
      // Show all pages if total is 3 or less
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage <= 2) {
      // Show first three pages
      pages = [1, 2, 3, "...", totalPages];
    } else if (currentPage >= totalPages - 1) {
      // Show last three pages
      pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
    } else {
      // Show middle pages dynamically
      pages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
    return pages;
  };

  return (
    <div className="blog__blogsecond">
      <div className="container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div className="blog__blogsecond-list">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => <BlogPost key={blog.id} post={blog} />)
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
        <div className="blog__blogsecond-pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="btn"
          >
            <GrFormPrevious style={{ fontSize: "24px" }} />
          </button>

          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="btn">
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`btn ${currentPage === page ? "active" : ""}`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="btn"
          >
            <MdNavigateNext style={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
