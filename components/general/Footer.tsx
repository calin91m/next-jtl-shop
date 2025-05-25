export function Footer() {
  return (
    <footer className="border-t bg-muted text-muted-foreground text-sm p-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-2 ">
        <p>© {new Date().getFullYear()} JTL Shop. All rights reserved.</p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="underline hover:text-primary"
            target="_blank"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://ui.shadcn.com"
            className="underline hover:text-primary"
            target="_blank"
          >
            ShadCN
          </a>
        </p>
      </div>
    </footer>
  );
}
