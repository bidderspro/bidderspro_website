import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upwork Automation | BiddersPro',
  description: 'Transform your Upwork experience with our automation system. Get clients to come to you instead of chasing them.',
};

export default function UpworkAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}