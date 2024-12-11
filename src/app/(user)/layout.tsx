export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header>this is header</header>
            {children}
            <footer>footer section</footer>
        </>
    );
}
