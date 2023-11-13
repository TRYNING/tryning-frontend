export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pb-20 pt-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Tu Compañía. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a
            href="https://twitter.com/tu_cuenta_de_twitter"
            className="text-blue-500 hover:text-blue-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/tu_cuenta_de_instagram"
            className="text-purple-500 hover:text-purple-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@tu_cuenta_de_tiktok"
            className="text-pink-500 hover:text-pink-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href="mailto:correo@tudominio.com"
            className="text-yellow-500 hover:text-yellow-300 mx-2"
          >
            Correo Electrónico
          </a>
        </div>
      </div>
    </footer>
  );
}
