import {
  DM_Sans,
  Inter,
  Roboto,
  Roboto_Mono,
  Shadows_Into_Light,
  Titillium_Web,
} from 'next/font/google';
import localFont from 'next/font/local';

export const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
});

export const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal'],
  variable: '--font-shadows-into-light',
});

export const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-titillium-web',
});
