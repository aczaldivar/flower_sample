const CartButton = ({ onClick, itemCount }) => {
  return (
    <button onClick={onClick} style={buttonStyle}>
      Cart {itemCount > 0 && <span style={badgeStyle}>({itemCount})</span>}
    </button>
  );
};

// Example styles (customize based on your design)
const buttonStyle = {
  padding: '10px',
  backgroundColor: 'violet',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const badgeStyle = {
  marginLeft: '5px',
  backgroundColor: '#f8f8f8',
  padding: '3px 6px',
  borderRadius: '50%',
  fontSize: '0.8em',
};

export default CartButton;