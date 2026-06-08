import "./globals.css";

export const metadata = {
  title: "StarKiddo — AI & Robotics Courses for Kids in Cairo",
  description:
    "StarKiddo teaches kids aged 5–16 the skills of tomorrow — AI, robotics, and coding — through fun, hands-on in-person courses in Cairo, Egypt.",
  keywords: ["AI courses kids Cairo", "robotics kids Egypt", "coding children Cairo", "STEM kids"],
  openGraph: {
    title: "StarKiddo — AI & Robotics for Kids",
    description: "Fun, hands-on AI & Robotics courses for kids aged 5–16 in Cairo.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}
