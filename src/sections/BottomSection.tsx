import { Text } from "@mantine/core";
import VerticalMenu from "../components/VerticalMenu";

const BottomSection: React.FC = () => (
  <div className="w-full h-full flex">
    <div className="w-1/8 h-full flex flex-col">
      <div className="h-full flex justify-center items-center">
       <VerticalMenu />
      </div>
    </div>
    <div className="w-1/2 h-full flex flex-col">
      <div className="h-1/2 flex justify-center items-center">
        <Text>Text 3</Text>
      </div>
      <div className="h-1/2 flex justify-center items-center">
        <Text>Text 4</Text>
      </div>
    </div>
    <div className="w-1/4 h-full flex flex-col">
      <div className="h-full  flex justify-center items-center">
        <Text>Text 1</Text>
      </div>
    </div>
  </div>
);
export default BottomSection;
