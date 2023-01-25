import '../styles/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        {children}
      </body>
    </html>
  );
}
