interface ExperienceCardProps {
  title: string
  description: string
  image?: string
}

export default function ExperienceCard({ title, description, image }: ExperienceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}