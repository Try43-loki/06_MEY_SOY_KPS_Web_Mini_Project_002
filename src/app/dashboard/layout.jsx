import { Toaster } from "sonner";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
