import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'AI4Business - Enterprise AI Solutions for South Africa',
  description: "Bespoke neural ecosystems for South Africa's most ambitious enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-black text-neutral-200">
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}