function Footer() {
  // U JSX-u se JavaScript izraz piše u vitičastim zagradama { }
  const godina = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {godina} Eldin Ponjević | Praksa Frontend</p>
    </footer>
  );
}

export default Footer;
