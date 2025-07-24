import Link from "next/link";

export default function ServiceCard({ service }) {
  const { icon: Icon, title, description, price, features, href, popular } = service;

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      {popular && (
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-1 py-0.5 rounded">
          Popular
        </span>
      )}

      <div className="flex items-center justify-center mb-3">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>

      <h3 className="text-md font-bold text-gray-800 mb-1 text-center">{title}</h3>
      <p className="text-gray-600 text-xs mb-3 text-center">{description}</p>

      <ul className="mb-3 space-y-0.5 text-gray-600 text-xs">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-500 mr-1">✓</span> {feature}
          </li>
        ))}
      </ul>

      <div className="text-center mb-3">
        <span className="text-blue-500 font-bold text-md">{price}</span>
      </div>

      <Link
        href={href}
        className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 rounded transition-colors duration-200"
      >
        Learn More
      </Link>
    </div>
  );
}
