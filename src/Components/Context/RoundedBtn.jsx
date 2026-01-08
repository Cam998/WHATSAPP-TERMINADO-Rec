import React from "react"

function RoundedBtn({ icon, onClick, className }) {
return (
    <button className={className} onClick={onClick}>
        {icon}
    </button>
);
}

export default RoundedBtn