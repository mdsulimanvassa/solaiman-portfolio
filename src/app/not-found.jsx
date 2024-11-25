export default function NotFound() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Blog Post Not Found</h1>
        <p>We couldn,t find the blog post you were looking for.</p>
        <a href="/home" style={{ color: "#fff", textDecoration: "underline" }}>
          Back to home
        </a>
      </div>
    );
  }