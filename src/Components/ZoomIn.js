import React from 'react'

export default function ZoomIn({ onChange, typedText }) {
    return (
        <div>
            <input
                type="text"
                value={typedText}
                onChange={onChange}
            />
        </div>
    )
}
