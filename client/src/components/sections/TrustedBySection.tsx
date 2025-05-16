import { FaMicrosoft, FaAmazon, FaGoogle, FaApple, FaSpotify, FaSlack } from 'react-icons/fa';

const ClientLogo = ({ children }: { children: React.ReactNode }) => (
  <div className="h-12 flex items-center justify-center">
    {children}
  </div>
);

export default function TrustedBySection() {
  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-foreground text-lg font-medium mb-8">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          <ClientLogo>
            <FaMicrosoft className="text-4xl text-foreground/70" />
          </ClientLogo>
          <ClientLogo>
            <FaAmazon className="text-4xl text-foreground/70" />
          </ClientLogo>
          <ClientLogo>
            <FaGoogle className="text-4xl text-foreground/70" />
          </ClientLogo>
          <ClientLogo>
            <FaApple className="text-4xl text-foreground/70" />
          </ClientLogo>
          <ClientLogo>
            <FaSpotify className="text-4xl text-foreground/70" />
          </ClientLogo>
          <ClientLogo>
            <FaSlack className="text-4xl text-foreground/70" />
          </ClientLogo>
        </div>
      </div>
    </section>
  );
}
