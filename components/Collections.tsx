import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 mt-[-20px]">
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex items-center justify-center gap-3">
          {collections.map((collection: CollectionType, index) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={383}
                height={200}
                className="rounded-lg cursor-pointer hover:text-[#01c3c7] hover:scale-105 transform transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
