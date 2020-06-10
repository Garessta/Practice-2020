import React from 'react';

export function Anchor({href, text}) {
    return (
        <a
            className="App-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}