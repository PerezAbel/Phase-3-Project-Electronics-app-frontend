
function LogInButton({ onClick }) {
    return (
      <button onClick={onClick} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Log In
      </button>
    );
  }  

export default LogInButton;