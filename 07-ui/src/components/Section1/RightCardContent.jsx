const RightCardContent = (props) => {
  console.log(props.color);

  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg text-white leading-relaxed ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          minus? Tempora voluptatibus dolores reprehenderit atque!
        </p>
      </div>

      <div className="flex justify-between">
        <button
          style={{ backgroundColor: props.color }}
          className="   text-white font-medium px-8  py-3 rounded-full "
        >
          {props.tag}
        </button>
        <button
          style={{ backgroundColor: props.color }}
          className=" text-white font-medium px-4 py-3 rounded-full "
        >
          <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
