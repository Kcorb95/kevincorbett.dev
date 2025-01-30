export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p>Interested in working together or just want to chat?</p>
      <ul className="ml-6 mt-2 list-disc space-y-1">
        <li>
          Email:{' '}
          <a
            href="mailto:kevin@example.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            kevin@example.com
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href="https://github.com/kevin"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            github.com/kevin
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/kevin"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            linkedin.com/in/kevin
          </a>
        </li>
      </ul>
    </section>
  );
}
