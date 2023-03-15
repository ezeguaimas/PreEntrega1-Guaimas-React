function ItemListContainer({ propsSaludo }) {
  return (
    <h2
      style={{
        backgroundColor: "#f1f1f1",
        padding: "1rem",
        borderRadius: "10px",
        fontSize: "2rem",
        textAlign: "center",
        color: "#333",
      }}
    >
      {propsSaludo}
    </h2>
  );
}

export default ItemListContainer;
