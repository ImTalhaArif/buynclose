import { useRouter } from 'next/router';

const properties = [
  {
    id: 5,
    title: "Luxury Villa in Malibu",
    description: "A stunning villa with ocean views.",
    price: "$3,500,000",
    thumbnail: "/images/img5.jpg",
    details: "This luxurious villa features modern architecture with large windows showcasing breathtaking ocean views. It includes a swimming pool, large open spaces, and high-end finishes throughout.",
  },
  {
    id: 6,
    title: "Beachfront Condo in Miami",
    description: "A modern condo with direct beach access.",
    price: "$1,800,000",
    thumbnail: "/images/img6.jpg",
    details: "The beachfront condo offers the best of both worlds – beautiful views of the ocean and easy access to the beach. The interior is designed with a modern, open layout and includes state-of-the-art appliances.",
  },
  {
    id: 7,
    title: "Penthouse in Manhattan",
    description: "An exclusive penthouse with skyline views.",
    price: "$5,000,000",
    thumbnail: "/images/img7.jpg",
    details: "This penthouse offers the ultimate in luxury with panoramic skyline views of Manhattan. It features an open-plan living area, gourmet kitchen, and a rooftop terrace perfect for entertaining.",
  },
  // Add more properties as required...
];

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the property by ID
  const property = properties.find((prop) => prop.id === Number(id));

  if (!property) {
    return <p>Property not found.</p>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <img src={property.thumbnail} alt={property.title} />
      <p>{property.description}</p>
      <p>{property.price}</p>
      <h3>Details:</h3>
      <p>{property.details}</p>
    </div>
  );
}
