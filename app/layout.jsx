import './globals.css';

export const metadata = {
  title: 'XBloc2',
  description: 'XBloc2 website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
