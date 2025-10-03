import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingPost, setEditingPost] = useState(null); // bài viết đang chỉnh sửa

  // 1. GET – Lấy dữ liệu khi component load
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_URL}?_limit=5`);
      setPosts(res.data);
    } catch (err) {
      console.error("Lỗi tải dữ liệu:", err);
    }
  };

  // 2. POST – Thêm bài viết mới
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    try {
      const newPost = { title, body, userId: 1 };
      const res = await axios.post(API_URL, newPost);
      setPosts([res.data, ...posts]);
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Lỗi thêm bài viết:", err);
    }
  };

  // 3. PUT – Cập nhật bài viết
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    try {
      const updatedPost = { ...editingPost, title, body };
      const res = await axios.put(`${API_URL}/${editingPost.id}`, updatedPost);

      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? res.data : post
        )
      );
      setEditingPost(null);
      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Lỗi cập nhật:", err);
    }
  };

  const startEditing = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setBody(post.body);
  };

  const cancelEditing = () => {
    setEditingPost(null);
    setTitle("");
    setBody("");
  };

  // 4. DELETE – Xóa bài viết
  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa bài viết này không?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Lỗi xóa bài viết:", err);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>React Axios CRUD Demo</h1>

      {/* Form thêm & sửa */}
      <form onSubmit={editingPost ? handleUpdate : handleAdd}>
        <input
          type="text"
          placeholder="Tiêu đề..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Nội dung..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 15px", marginRight: "10px" }}>
          {editingPost ? "Cập nhật" : "Thêm mới"}
        </button>
        {editingPost && (
          <button
            type="button"
            onClick={cancelEditing}
            style={{ padding: "8px 15px", backgroundColor: "#ccc" }}
          >
            Hủy
          </button>
        )}
      </form>

      <hr />

      {/* Danh sách bài viết */}
      <h2>Danh sách bài viết</h2>
      {posts.length === 0 ? (
        <p>Chưa có bài viết nào</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button onClick={() => startEditing(post)} style={{ marginRight: "10px" }}>
                Sửa
              </button>
              <button onClick={() => handleDelete(post.id)} style={{ backgroundColor: "#f44", color: "#fff" }}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
