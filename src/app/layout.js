import "./globals.css";
import {
  hankenGrotesk,
  bricolageGrotesque,
  work_Sans,
  inter,
} from "@/lib/font";
import ClientWrapper from "@/components/ClientWrapper"; // See step 2

export const metadata = {
  title: "Quantbox",
  description: "Your App Description",
  icons: {
    icon: "/favicon.png", // You can also add appleIcon, shortcut, etc.
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.className} ${bricolageGrotesque.className} ${work_Sans.className} ${inter.className}`}
    >
      <body>
        <ClientWrapper>{children}</ClientWrapper>
        {/* {children} */}
      </body>
    </html>
  );
}
