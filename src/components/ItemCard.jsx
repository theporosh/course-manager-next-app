import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ItemCard({ item }) {

    const router = useRouter();

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col">
            {/* Image Section */}
            <div className="relative w-full h-48 md:h-52 lg:h-56">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                   
                    {item.description.length > 50 ? item.description.slice(0, 50) + "..." : item.description}

                </p>

                <div className="mt-auto flex items-center justify-between">
                    <p className="text-indigo-600 font-bold text-lg">{item.price}</p>

                    <button 
                    onClick={() => router.push(`/courses/${item.id}`)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-sm hover:shadow-md">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

//  {item.description}