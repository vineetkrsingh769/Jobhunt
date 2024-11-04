// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// import Footer from '../Component/Footer';
// import Nav from '../Component/Nav'; // Assuming you have a Nav component

// const Blog = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // New state for error handling
//   const articlesPerPage = 30;

//   useEffect(() => {
//     const fetchArticles = async () => {
//       let allArticles = [];
//       let page = 1;

//       try {
//         while (true) {
//           const response = await axios.get(`https://dev.to/api/articles`, {
//             params: {
//               per_page: articlesPerPage,
//               page: page,
//             },
//           });

//           const fetchedArticles = response.data;
//           if (fetchedArticles.length === 0) break;

//           allArticles = [...allArticles, ...fetchedArticles];
//           page++;
//         }

//         setArticles(allArticles);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//         setError("Failed to fetch articles. Please try again later."); // Set error message
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) return <p>Loading articles...</p>;

//   return (
//     <>
//       <Nav />
//       <div className="articles-container">
//         <h1 className="title">Dev.to Articles</h1>
//         {error && <p className="error">{error}</p>} {/* Display error if present */}
//         <div className="articles-grid">
//           {articles.length > 0 ? (
//             articles.map((article) => (
//               <div key={article.id} className="article-card">
//                 <h2 className="article-title">{article.title}</h2>
//                 <p className="article-author">By: {article.user.name}</p>
//                 <p className="article-date">Published: {new Date(article.published_at).toLocaleDateString()}</p>
//                 <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-link">
//                   Read Article
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p>No articles found.</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Blog;
