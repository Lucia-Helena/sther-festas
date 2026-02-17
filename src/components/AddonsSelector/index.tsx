import type { Addon } from "../../data/catalog";

type Props = {
  addons: Addon[];
  selectedAddons: string[];
  onChange: (addons: string[]) => void;
};

function AddonsSelector({ addons, selectedAddons, onChange }: Props) {
  function toggleAddon(id: string) {
    if (selectedAddons.includes(id)) {
      onChange(selectedAddons.filter((a) => a !== id));
    } else {
      onChange([...selectedAddons, id]);
    }
  }

  return (
    <section>
      <h3>Escolha os adicionais</h3>

      {addons.map((addon) => (
        <label key={addon.id} style={{ display: "block", marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={selectedAddons.includes(addon.id)}
            onChange={() => toggleAddon(addon.id)}
          />
          {" "}
          {addon.name} (+R$ {addon.price})
        </label>
      ))}
    </section>
  );
}

export default AddonsSelector;
