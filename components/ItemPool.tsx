"use client";

import React from "react";
import Item from "./Item";

interface ItemPoolProps {
    flavors: string[];
    onDragStart: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
    onSpeak: (text: string) => void;
}

const ItemPool: React.FC<ItemPoolProps> = ({ flavors, onDragStart, onDrop, onDragOver, onSpeak }) => {
    return (
        <div>
            <h3>Item Pool</h3>
            <div className="flex gap-2 p-2 border-2" onDrop={onDrop} onDragOver={onDragOver}>
                {flavors.map((flavor, index) => (
                    <Item key={index} id={`item-${index}`} flavor={flavor} onDragStart={onDragStart} onClick={() => onSpeak(flavor)} />
                ))}
            </div>
        </div>
    );
};

export default ItemPool;
