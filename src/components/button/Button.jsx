import React from 'react';

const Button = ({content, styles}) => (
    <button type="button" class="btn btn-block btn-primary mt-4"
        style={{
            height: "48px",
            textTransform: "uppercase",
            fontWeight: "bold"
        }}>
            Button
    </button>
);

export default Button;