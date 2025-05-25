function Footer() {
  return (
    <footer className="flex flex-col items-center pt-10 pb-5 space-y-2 text-center">      
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      © {new Date().getFullYear()} Pemba Sherpa. All rights reserved.
    </p>

    <a
      href={"https://github.com/pemba1s1/pemba.dev"}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-gray-500 dark:text-gray-400 underline hover:text-gray-700 dark:hover:text-gray-300"
    >
      View source code
    </a>
  </footer>
  );
}

export default Footer;
