import Image from "next/image";

type BookCoverPreviewProps = {
  image: string;
  author: string;
  collectionTitle: string;
  territory: string;
  imagePosition?: string;
};

export function BookCoverPreview({
  image,
  author,
  collectionTitle,
  territory,
  imagePosition
}: BookCoverPreviewProps) {
  return (
    <div className="rounded-[2rem] border border-black/10 bg-[#171717] p-5 shadow-haze md:p-8">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-black">
        <div className="relative aspect-[16/10]">
          <Image
            src={image}
            alt={`${collectionTitle} ${territory}`}
            fill
            className="object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/14" />

          <div className="absolute left-1/2 top-[11%] w-[90%] -translate-x-1/2 text-center text-paper/78">
            <p className="text-[11px] uppercase tracking-[0.3em] md:text-[12px]">{author}</p>
          </div>

          <div className="absolute inset-x-[8%] top-[28%] text-center text-paper">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="h-px flex-1 bg-paper/28" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-paper/70 md:text-[12px]">
                {collectionTitle}
              </span>
              <span className="h-px flex-1 bg-paper/28" />
            </div>

            <h3 className="mt-4 whitespace-nowrap text-center font-serif text-[clamp(1.75rem,3.35vw,2.85rem)] leading-none tracking-[0.01em]">
              ARGENTINA
            </h3>
          </div>

          <div className="absolute inset-x-0 bottom-[10%] px-8 text-center">
            <p className="font-serif text-xl text-paper/94 md:text-3xl">{territory}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
