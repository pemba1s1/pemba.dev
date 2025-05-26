function TechCard({ tech }: { tech: string }) {
  return (
    <p
      className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-xs leading-4"
    >
      {tech}
    </p>
  );
}

export default TechCard;