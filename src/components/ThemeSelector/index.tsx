import type { Theme } from "../../data/catalog";
import { Grid, Card } from "./styled";

type Props = {
  themes: Theme[];
  selectedTheme: Theme | null;
  onSelectTheme: (theme: Theme) => void;
};

function ThemeSelector({ themes, selectedTheme, onSelectTheme }: Props) {
  return (
    <section>
      <h2>Escolha o tema da sua festa</h2>

      <Grid>
        {themes.map((theme) => (
          <Card
            key={theme.id}
            onClick={() => onSelectTheme(theme)}
            $active={selectedTheme?.id === theme.id}
          >
            <img
              src={theme.image}
              alt={theme.name}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: 12,
                marginBottom: 12,
              }}
            />

            <strong>{theme.name}</strong>
            <p>R$ {theme.price}</p>
          </Card>
        ))}
      </Grid>
    </section>
  );
}

export default ThemeSelector;
