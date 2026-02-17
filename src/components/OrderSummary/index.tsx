import type { Theme } from "../../data/catalog";

type Props = {
  theme: Theme;
  selectedAddons: string[];
};

function OrderSummary({ theme, selectedAddons }: Props) {
  const addonsSelected = theme.addons.filter((a) =>
    selectedAddons.includes(a.id)
  );

  const total =
    theme.price +
    addonsSelected.reduce((sum, addon) => sum + addon.price, 0);

  const message = `
Olá! Gostaria de um orçamento 😊

Tema: ${theme.name}
Adicionais: ${addonsSelected.map((a) => a.name).join(", ") || "Nenhum"}
Valor estimado: R$ ${total}
`;

  const whatsappLink = `https://wa.me/5521990133031?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section>
      <h3>Resumo do pedido</h3>
      <p>Tema: {theme.name}</p>
      <p>Total: R$ {total}</p>

      <a href={whatsappLink} target="_blank">
        Finalizar no WhatsApp
      </a>
    </section>
  );
}

export default OrderSummary;
