import { useState } from "react";

import { Container, Title, Subtitle } from "./styled";

import Header from "../../components/Header";
import ImageCarousel from "../../components/ImageCarousel";
import FloatingButtons from "../../components/FloatingButtons";

   

import ThemeSelector from "../../components/ThemeSelector";
import AddonsSelector from "../../components/AddonsSelector";
import OrderSummary from "../../components/OrderSummary";

import { themes } from "../../data/catalog";
import type { Theme } from "../../data/catalog";

function Home() {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  return (
    <>
      <Header />

      <ImageCarousel />

      <Container>
       

        <ThemeSelector
          themes={themes}
          selectedTheme={selectedTheme}
          onSelectTheme={(theme) => {
            setSelectedTheme(theme);
            setSelectedAddons([]);
          }}
        />

        {selectedTheme && (
          <AddonsSelector
            addons={selectedTheme.addons}
            selectedAddons={selectedAddons}
            onChange={setSelectedAddons}
          />
        )}

        {selectedTheme && (
          <OrderSummary
            theme={selectedTheme}
            selectedAddons={selectedAddons}
          />
        )}
      </Container>

      <FloatingButtons />
    </>
  );
}

export default Home;
