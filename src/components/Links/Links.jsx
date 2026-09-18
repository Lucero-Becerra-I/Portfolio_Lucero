import "./Links.css";

function Links({
  href,
  label,
  description,
  className = "",
}) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={`links-card ${className}`}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <div className="links-content">

        <span className="links-label">
          {label}
        </span>

        {description && (
          <small className="links-description">
            {description}
          </small>
        )}

      </div>
    </a>
  );
}

export default Links;
