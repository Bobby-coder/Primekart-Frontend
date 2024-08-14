function CategorySidebarItem({ id, name, url }) {
  return (
    <div className="relative flex items-center w-full">
      {/*large screens left border*/}
      <div className="absolute top-0 right-0 w-1 h-full bg-muted rounded-bl-lg rounded-tl-lg lg:rounded-none lg:left-0"></div>
      {/*content*/}
      <div className="flex flex-col w-full py-2 items-center hover:bg-muted cursor-pointer border-b border-solid border-[#eeeeee] lg:p-3 lg:flex-row lg:gap-3">
        <div className="overflow-hidden w-[48px] h-[48px] bg-[#F8F8F8] rounded-xl pt-2">
          <img src={url} alt="category-image" className="w-full" />
        </div>
        <p className="text-xs font-bold text-center lg:text-sm lg:font-medium lg:leading-[18px]">
          {name}
        </p>
      </div>
    </div>
  );
}

export default CategorySidebarItem;
