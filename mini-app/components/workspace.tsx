"use client";
import { furniture } from "@/data/furniture";
import { useState } from "react";

export default function Workspace() {
  const [placed, setPlaced] = useState<
    { id: number; x: number; y: number; item: typeof furniture[0] }[]
  >([]);
  const [dragging, setDragging] = useState<
    { id: number; item: typeof furniture[0] } | null
  >(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: typeof furniture[0],
    id: number
  ) => {
    setDragging({ id, item });
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPlaced([...placed, { ...dragging, x, y }]);
    setDragging(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-96 border rounded p-4 relative bg-gray-100">
      <h2 className="text-xl font-semibold mb-2">Workspace</h2>
      <div
        className="relative w-full h-full border rounded"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {placed.map((p, idx) => (
          <div
            key={idx}
            style={{ position: "absolute", left: p.x, top: p.y }}
            className="p-1 bg-white border rounded shadow"
          >
            {p.item.name}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {furniture.map((item, idx) => (
          <div
            key={idx}
            draggable
            onDragStart={(e) => handleDragStart(e, item, idx)}
            className="p-2 border rounded cursor-move bg-white"
          >
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
