const ContactPage = () => {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <h1 className="text-30 font-bold">Contact Me</h1>
      <p className="text-16">Interested in working together or just want to chat?</p>
      <ul className="list-disc space-y-2 pl-[2.4rem]">
        <li>
          Email:{' '}
          <a
            href="mailto:kevin@example.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            kevin@email.com
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
    </div>
  );
};

export default ContactPage;
