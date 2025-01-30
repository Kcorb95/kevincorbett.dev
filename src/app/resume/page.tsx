export default function ResumePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p>Below is my latest resume. Feel free to download!</p>
      <a
        href="/resume.pdf"
        className="inline-block rounded bg-gray-200 px-4 py-2 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
        download
      >
        Download PDF
      </a>
      {/* Could embed an iframe or HTML version if you wish */}
    </section>
  );
}
