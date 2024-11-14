// "use client"
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/style.components.css";
import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: {
    default: "خدمات النقل في المغرب",
    template: "خدمات النقل في المغرب %s",
  },
  description: `تطبيقنا مصمم خصيصًا لتوفير حلول نقل متكاملة ومريحة للمستخدمين في المغرب. يسهل التطبيق على الأفراد والشركات العثور على خدمات النقل التي تتناسب مع احتياجاتهم، سواء كانت لنقل البضائع أو الأفراد. بفضل واجهته البسيطة وسهلة الاستخدام، يمكن للمستخدمين استعراض خيارات متنوعة من مقدمي خدمات النقل، مع القدرة على مقارنة الأسعار والمواصفات بسهولة. يوفر التطبيق معلومات دقيقة حول كل خدمة، بما في ذلك تقييمات وآراء المستخدمين السابقين، مما يساعد في اتخاذ قرار مستنير.

علاوة على ذلك، يمكن للمستخدمين حجز الخدمات مباشرة من خلال التطبيق، مما يوفر الوقت والجهد. نهدف إلى تحقيق أعلى مستويات الراحة والأمان، مع ضمان توفير أفضل الأسعار. بفضل تقنيات البحث المتقدمة، يمكن للمستخدمين العثور على الخدمة المناسبة في أي وقت ومن أي مكان. انضم إلينا اليوم واكتشف مدى سهولة وراحة الحصول على خدمات النقل في المغرب!`,
  icons: {
    icon: [
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        url: "/assets/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        url: "/assets/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        url: "/assets/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        url: "/assets/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        url: "/assets/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        url: "/assets/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        url: "/assets/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        url: "/assets/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/assets/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/assets/android-icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/assets/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/assets/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/assets/favicon-16x16.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8637366029489816"
          crossorigin="anonymous"></script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}