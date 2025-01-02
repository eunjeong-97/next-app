import styles from "@/app/page.module.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={styles.container}>{children}</body>
    </html>
  );
}

