import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Footer can go here later too! */}
      <main>{children}</main>
      <footer className="mt-5 py-3 text-center text-muted border-top">
        © 2026 School Library - Powered by Raspberry Pi
      </footer>
    </div>
  );
};

export default Layout;
