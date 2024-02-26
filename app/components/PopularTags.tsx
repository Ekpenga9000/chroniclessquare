import { PopularTagsProps } from "@app/interfaces/interfaces";


const PopularTags = (props: PopularTagsProps) => {
    const { tags, title } = props;
  return (
    <div className="flex justify-center">
      <div className="container-custom mt-4 md:flex items-center gap-2">
        <h2 className="text-white/60 text-sm mb-2 md:mb-0">{title}:</h2>
              <ul className="flex flex-wrap items-center gap-4">
            {tags?.map((tag, index) => {
              return (
                <li key={index} className="text-white/50 hover:text-white/70 text-xs cursor-pointer">
                  {tag}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
