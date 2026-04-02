function ItemList({ items, deleteItem }) {
  return (
    <div>
      <h3>Item List (Child)</h3>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul style={{ listStyle: "disc", padding: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ margin: "10px 0" }}>
              {item}

              <button
                onClick={() => deleteItem(index)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;