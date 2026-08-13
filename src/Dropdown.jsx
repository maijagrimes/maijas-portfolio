import { useState } from "react"

export default function Dropdown({ label, children, isOpen, onToggle }) {
    const [internalExpanded, setInternalExpanded] = useState(false)

    // Controlled if isOpen/onToggle are passed, otherwise falls back to internal state
    const isControlled = isOpen !== undefined && onToggle !== undefined
    const expanded = isControlled ? isOpen : internalExpanded

    function handleClick() {
        if (isControlled) {
            onToggle()
        } else {
            setInternalExpanded(p => !p)
        }
    }

    return (
        <div className="dropdown">
        <button
            className="dropdown-toggle"
            onClick={handleClick}
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