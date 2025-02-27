"use client";

import React from "react";

const tierColors: Record<string, string> = {
    S: "bg-red-500",
    A: "bg-orange-400",
    B: "bg-yellow-300",
    C: "bg-green-400",
    D: "bg-blue-500",
};

interface TierRowProps {
    tier: string;
    onDrop: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
}

const TierRow: React.FC<TierRowProps> = ({ tier, onDrop, onDragOver }) => {
    return (
        <div className="flex border-4 border-black rounded-lg overflow-hidden min-h-[120px]">
            <div className={`w-24 flex justify-center items-center text-white text-lg font-bold ${tierColors[tier]}`}>
                {tier}
            </div>
            <div className="p-3 flex-1 flex gap-3 bg-white min-h-[100px]" onDrop={onDrop} onDragOver={onDragOver}></div>
        </div>
    );
};



export default TierRow;
