'use client'

export default function Clickbut({ click, taip, text, className }) {
    return (
        <button
            variant="outline"
            onClick={click}
            type={taip}
            className={`${className}`}
        >
            {text}
        </button>
    )
}