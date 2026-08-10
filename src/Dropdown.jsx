import { useState } from "react"

// Dropdown.jsx
export default function Dropdown({ label, children }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="dropdown">
        <button
            className="dropdown-toggle"
            onClick={() => setExpanded(p => !p)}
            aria-expanded={expanded}
        >
            {label}
            <span className={`dropdown-caret ${expanded ? 'open' : ''}`}>▸</span>
        </button>

        {expanded && (
            <div className="dropdown-details">
            <p>{children}</p>
            </div>
        )}
        </div>
    )
}