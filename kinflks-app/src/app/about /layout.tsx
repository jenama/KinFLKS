const Layout = ({ children}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
      <html lang="en">
        <body className=''>

          {children}
        </body>
    </html>
    );
  };
export default Layout