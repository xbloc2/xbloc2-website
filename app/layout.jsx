import './globals.css';

export const metadata = {
  title: "Xbloc² — Fire rated AAC systems",
  description: "Up to 4h UL-rated AAC assemblies with dose packs. One trade. Faster close-in.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
