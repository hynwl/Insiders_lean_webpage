import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import PATH from "../../constants/path";
import Icon from "../../components/Icon";

export const Opinion = (): JSX.Element => {
  const navigate = useNavigate();

  const handleVoteClick = (vote: string) => {
    navigate(`${PATH.RESULT}/${vote}`);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1728px] h-[1117px] relative flex flex-col items-center gap-10">
        {/* Question Section */}
        <div className=" w-full top-[200px] text-center">
          <div className="bg-[#F5F5F5] mx-auto max-w-[1000px] py-12 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[32px] text-[#141414]">Q.</span>
              <span className="text-[32px] text-[#141414]">공무원과 정치인도 AI가 하면 더 효율적일까?</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Icon type="timer"/>
              <span className="text-[24px] text-[#707070]">13:28</span>
            </div>
          </div>
        </div>

        {/* Voting Buttons */}
        <div className="w-full top-[600px] flex justify-center gap-16">
          <Button
            onClick={() => handleVoteClick("agree")}
            className="w-[283px] h-[283px] bg-white shadow-lg rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center"
          >
            <span className="text-[40px] text-[#000000]">찬성</span>
          </Button>

          <Button
            onClick={() => handleVoteClick("neutral")}
            className="w-[283px] h-[283px] bg-white shadow-lg rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center"
          >
            <span className="text-[40px] text-[#000000]">모르겠어요</span>
          </Button>

          <Button
            onClick={() => handleVoteClick("disagree")}
            className="w-[283px] h-[283px] bg-white shadow-lg rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center"
          >
            <span className="text-[40px] text-[#000000]">반대</span>
          </Button>
        </div>

        {/* Bottom Text */}
        <div className="w-full bottom-[100px] text-center text-[24px] text-[#707070]">
          투표 후 토론의 장으로 이동됩니다.
        </div>
      </div>
    </div>
  );
};
