import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Vikas Katiyar - Operations Supervisor & Corporate Portfolio',
  description: 'Executive portfolio and digital resume of Vikas Katiyar, Operations Supervisor at RSPL Limited, Kanpur. Operations management, FMCG supervision, B.Com, LLB.',
  openGraph: {
    title: 'Vikas Katiyar - Operations Supervisor & Corporate Portfolio',
    description: 'Executive portfolio and digital resume of Vikas Katiyar, Operations Supervisor at RSPL Limited, Kanpur. Operations management, FMCG supervision, B.Com, LLB.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikas Katiyar - Operations Supervisor & Corporate Portfolio',
    description: 'Executive portfolio and digital resume of Vikas Katiyar, Operations Supervisor at RSPL Limited, Kanpur. Operations management, FMCG supervision, B.Com, LLB.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
