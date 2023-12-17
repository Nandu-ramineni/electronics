// BlogsAndReviews.jsx

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import '../styles.css'
const BlogsAndReviews = () => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '', image: null });
  const [newReview, setNewReview] = useState({ product: '', rating: 0, review: '', author: '' });
  const [blogs, setBlogs] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    // Load blogs and reviews from localStorage on component mount
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

    setBlogs(storedBlogs);
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    // Save blogs and reviews to localStorage whenever they change
    localStorage.setItem('blogs', JSON.stringify(blogs));
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [blogs, reviews]);

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const newBlogWithDate = { ...newBlog, date: new Date().toISOString().slice(0, 10) };
    setBlogs([...blogs, newBlogWithDate]);
    setNewBlog({ title: '', content: '', author: '', image: null });
    setShowBlogForm(false);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReviewWithDate = { ...newReview, date: new Date().toISOString().slice(0, 10) };
    setReviews([...reviews, newReviewWithDate]);
    setNewReview({ product: '', rating: 0, review: '', author: '' });
    setShowReviewForm(false);
  };

  const displayImage = (image) => {
    return image ? URL.createObjectURL(image) : null;
  };

  return (
    <div className="blogs-and-reviews-container">
      <div className="blogs-section">
        <h2>Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              {blog.image && <img src={displayImage(blog.image)} alt={blog.title} />}
              <p>{blog.content}</p>
              <p>
                <strong><FaUser />Author:</strong> {blog.author} | <FaCalendarAlt /> {blog.date}
              </p>
            </li>
          ))}
        </ul>
        {!showBlogForm && (
          <button onClick={() => setShowBlogForm(true)}>Write a Blog</button>
        )}
        {showBlogForm && (
          <div className="write-blog-form">
            <h3>Write a Blog</h3>
            <form onSubmit={handleBlogSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  required
                />
              </label>
              <label>
                Content:
                <textarea
                  value={newBlog.content}
                  onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                  required
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  value={newBlog.author}
                  onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                  required
                />
              </label>
              <label>
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewBlog({ ...newBlog, image: e.target.files[0] })}
                  required
                />
              </label>
              <button type="submit">Submit Blog</button>
            </form>
          </div>
        )}
      </div>

      <div className="reviews-section">
        <h2>Product Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.product}</h3>
              <p>{review.review}</p>
              <p>
                <strong>Rating:</strong> {review.rating} |{' '}
                <strong><FaUser />Author:</strong> {review.author} |{' '}
                <FaCalendarAlt /> {review.date}
              </p>
            </li>
          ))}
        </ul>
        {!showReviewForm && (
          <button onClick={() => setShowReviewForm(true)}>Write a Review</button>
        )}
        {showReviewForm && (
          <div className="write-review-form">
            <h3>Write a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <label>
                Product:
                <input
                  type="text"
                  value={newReview.product}
                  onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                  required
                />
              </label>
              <label>
                Rating:
                <input
                  type="number"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseFloat(e.target.value) })}
                  min="0"
                  max="5"
                  step="0.1"
                  required
                />
              </label>
              <label>
                Review:
                <textarea
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  required
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  required
                />
              </label>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsAndReviews;
