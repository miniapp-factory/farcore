import { furniture } from "@/data/furniture";

export default function Furniture() {
  return (
    <section className="w-full flex flex-wrap gap-4">
      {furniture.map((item, idx) => (
        <div key={idx} className="p-2 border rounded">
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
