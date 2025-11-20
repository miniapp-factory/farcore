import { houseTemplates } from "@/data/house-templates";

export default function HouseTemplates() {
  return (
    <section className="w-full flex flex-wrap gap-4 mt-6">
      {houseTemplates.map((template, idx) => (
        <div key={idx} className="p-2 border rounded">
          <h3 className="font-semibold">{template.name}</h3>
          <p>{template.description}</p>
        </div>
      ))}
    </section>
  );
}
