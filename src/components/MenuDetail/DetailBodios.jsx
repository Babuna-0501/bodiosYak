import BodiosContent from "./BodiosContent";

function DetailBodios() {
  return (
    <div className="flex flex-col items-center text-black bg-customBg">
      <h1 className="text-8xl text-center uppercase max-md:text-4xl mt-[100px]">
        Bodios
      </h1>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfddcd14c852e5f589160e7a3bfec8069cac6975f34912a72f11667b8527de51?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1" 
        alt="Bodios brand showcase"
        className="object-contain self-stretch mt-16 w-full aspect-[1.78] max-md:mt-10 max-md:max-w-full" 
      />
      <BodiosContent />
    </div>
  );
}

export default DetailBodios;