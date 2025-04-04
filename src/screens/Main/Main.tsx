import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import PATH from "../../constants/path";

export const Main = (): JSX.Element => {
  const navigate = useNavigate();
  
  const handleOpinionClick = () => {
    navigate(PATH.OPINION);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[1728px] relative py-20 flex flex-col items-center gap-10">

        {/* Main Question Text */}
        <div className="flex flex-col items-center text-center px-4 relative w-fit">    <div className="hidden md:block absolute -top-24 -left-20 text-[#141414] text-[309px] leading-none">
          &quot;
        </div>
          <h1 className="text-[#141414] text-[75px] md:text-[55px] sm:text-[40px] font-semibold leading-tight mb-4">
            공무원과 정치인도
          </h1>
          <h1 className="text-[#141414] text-[75px] md:text-[55px] sm:text-[40px] font-semibold leading-tight">
            AI가 하면 더 효율적일까?
          </h1>
          <div className="hidden md:block absolute -bottom-24 -right-[120px] text-[#141414] rotate-180 text-[309px] leading-none">
          &quot;
        </div>

        </div>

        {/* Quotation Marks */}
    
 
                {/* Share Opinion Button */}
                <div className="flex justify-center">
          <Button 
            className="w-[283px] h-[98px] mt-8 bg-[#141414] hover:bg-black rounded-full relative transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center justify-center gap-4 border-2 border-[#141414] hover:border-black"
            onClick={handleOpinionClick}
          >
            <span className="font-normal text-white text-3xl whitespace-nowrap">
              의견 나누기
            </span>
            <img
              className="w-3.5 h-[27px] transition-transform duration-200 group-hover:translate-x-1"
              alt="Arrow icon"
              src="/---4-1.svg"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};