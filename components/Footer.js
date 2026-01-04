export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 text-center">
      <p className="mb-2">© 2026 Mike-Chinem. All rights reserved.
        <br/> Send question to mikechinenwork@gmail.com </p>
      <div className="flex justify-center space-x-6">
        <a href="https://x.com/Mike_CHINEM" className="hover:text-[var(--color-brand-gold)] no-underline">Twitter</a>
        <a href="https://github.com/Mikechinem" className="hover:text-[var(--color-brand-gold)] no-underline">GitHub</a>
        <a href="https://www.linkedin.com/in/mikeehumadu/" className="hover:text-[var(--color-brand-gold)] no-underline">LinkedIn</a>
      </div>
    </footer>
  );
}
