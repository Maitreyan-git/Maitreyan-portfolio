const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Maitreyan T R. Built with passion & code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
