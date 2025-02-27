"use client";

import React from "react";

interface ItemProps {
    id: string;
    flavor: string;
    onDragStart: (e: React.DragEvent) => void;
    onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ id, flavor, onDragStart, onClick }) => {
    return (
        <div
        id={id}
        className="w-24 h-24 flex items-center justify-center cursor-pointer bg-white rounded shadow"
        draggable
        onDragStart={onDragStart}
        onClick={onClick}
    >
        <img src={`/assets/images/sparkling-water/${flavor}.png`} alt={`${flavor} Sparkling Water`} className="w-full h-full object-contain" />
    </div>
    
    );
};

export default Item;
