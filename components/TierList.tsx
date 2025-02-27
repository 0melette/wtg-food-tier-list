"use client";

import { useState } from "react";
import TierRow from "./TierRow";
import ItemPool from "./ItemPool";

const flavors = ["Raspberry", "Mango", "Pineapple", "Lime", "Passionfruit", "Watermelon"];

const TierList = () => {
    const [title, setTitle] = useState("Sparkling Water Tier List");

    const allowDrop = (ev: React.DragEvent) => ev.preventDefault();
    const drag = (ev: React.DragEvent) => ev.dataTransfer.setData("text", ev.currentTarget.id);
    const drop = (ev: React.DragEvent) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const draggedElement = document.getElementById(data);
        const dropTarget = ev.currentTarget;
        if (dropTarget && draggedElement) {
            dropTarget.appendChild(draggedElement);
        }
    };
    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(`${text} Sparkling Water`);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="p-5 bg-sky-500 text-white min-h-screen">
            <input
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded text-black"
            onChange={(e) => setTitle(e.target.value ? `${e.target.value}'s Sparkling Water Tier List` : "Sparkling Water Tier List")}
            />
            <h2 className="text-center text-xl font-bold">{title}</h2>

            <div id="fullTierList" className="space-y-4">
                {['S', 'A', 'B', 'C', 'D'].map((tier) => (
                    <TierRow key={tier} tier={tier} onDrop={drop} onDragOver={allowDrop} />
                ))}
            </div>

            <ItemPool flavors={flavors} onDragStart={drag} onDrop={drop} onDragOver={allowDrop} onSpeak={speak} />

        </div>
    );
};

export default TierList;
