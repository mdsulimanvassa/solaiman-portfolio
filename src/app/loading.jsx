export default function Loading() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
      margin: 0,
      textAlign: "center",
      backgroundColor: "#f8f9fa", // Optional background color
    },
    text: {
      fontFamily: "Arial, sans-serif",
      fontSize: "2rem", // Adjust text size
      color: "#007bff", // Text color (blue)
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>loading...</h1>
    </div>
  );
}