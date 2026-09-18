import "./Button.css";

function Button({ children, onClick, href, showArrow = false }) {
  const content = (
    <>
      <span className="link-text">{children}</span>
      {showArrow && <span className="link-arrow">↗</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className="text-link">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="text-link">
      {content}
    </button>
  );
}

export default Button;