import { Provider } from "@/context/provide";
import "../globals.css";
import Logo from "@/components/LogoComponent";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="container mx-auto my-12">
          <Logo />
        </div>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
