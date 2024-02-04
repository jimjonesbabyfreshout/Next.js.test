import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Implement middleware for flexible request-response handling
const requestResponseMiddleware = (Component: React.ComponentType<AppProps>) => {
  return (props: AppProps) => <Component {...props} />;
};

// Apply middleware using TypeScript decorators
@requestResponseMiddleware
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}