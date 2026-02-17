import { Container, Button } from "./styled";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function FloatingButtons() {
  return (
    <Container>
        <Button
        href="https://wa.me/5521990133031"
        target="_blank"
        aria-label="WhatsApp"
        $bg="#25d366"
        >

          <FaWhatsapp size={24}/>
        </Button>

         <Button
        href="https://www.instagram.com/sthe.festas?igsh=MTZ1NXF3MzE2djJjeA%3D%3D&utm_source=qr"
        target="_blank"
        aria-label="Instagram"
        $bg="#E1306C"
        >

          <FaInstagram size={24}/>
        </Button>
    </Container>
  );
}

export default FloatingButtons;