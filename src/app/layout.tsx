import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./style/globals.scss";
import StyledComponentsRegistry from './style/registry';

config.autoAddCss = false;

const roboto = Roboto({ weight: ['300', '400', '500', '700', '900'], subsets: ["latin"] });
export const metadata: Metadata = { 
   title: 'daaem-task-web'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={ roboto.className } suppressHydrationWarning={ true }>
            <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
         </body>
      </html>
   );
}