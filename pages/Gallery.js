import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

export default function Gallery() {
  return (
    <div className=" mx-auto p-4 mt-36">
      <Slider slides={SliderData} />
    </div>
  );
}
