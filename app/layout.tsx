import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://usid.in"),
  title: "USID Industrial Automation | PLC Automation Services in Greater Noida",
  description:
    "USID Industrial Automation provides PLC automation services in Greater Noida, control panel manufacturing in Delhi NCR, HMI, SCADA, Servo, VFD automation, PLC data logging, cloud integration and industrial IT integration.",
  openGraph: {
    title: "USID Industrial Automation | PLC Automation Services in Greater Noida",
    description:
      "USID Industrial Automation provides PLC automation services in Greater Noida, control panel manufacturing in Delhi NCR, HMI, SCADA, Servo, VFD automation, PLC data logging, cloud integration and industrial IT integration.",
    type: "website",
    locale: "en_IN",
    siteName: "USID Industrial Automation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
