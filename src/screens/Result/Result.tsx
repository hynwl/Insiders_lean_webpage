import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { twMerge } from "tailwind-merge";
import Icon from "../../components/Icon";

interface Opinion {
  id: string;
  created_at: string;
  content: string;
  author: string;
  vote: string;
  isMine?: boolean;
}

const MOCK_DATA = [
  {
    id: "1",
    created_at: '10:35',
    content: '나는 이런이런 의견이고 이런 느낌이고 이래서 이러이러하기 대문에 반대합니다.',
    author: '사자',
    vote: 'disagree',
    isMine:false
  },
  {
    id: "2",
    created_at: '11:59',
    content: '근데 그러면 이렇고 저렇기 때문에 이런 상황이 발생하고 그러면 이런이런 문제가 있어요.',
    author: '기린',
    vote: 'agree',
    isMine:false
  }
]

export const Result = (): JSX.Element => {
  const { vote } = useParams();
  const [opinion, setOpinion] = useState("");
  const [opinions, setOpinions] = useState<Opinion[]>(MOCK_DATA);
  const options = ['agree','neutral', 'disagree']
  const getVoteText = (vote: string) => {
    switch (vote) {
      case "agree":
        return "찬성";
      case "disagree":
        return "반대";
      case "neutral":
        return "모름";
      default:
        return "";
    }
  };

  const getVoteColor = (vote: string) => {
    switch (vote) {
      case "agree":
        return "text-[#142484]";
      case "disagree":
        return "text-[#BC0000]";
      case "neutral":
        return "text-[#707070]";
      default:
        return "";
    }
  };

  const formatTimestamp = () => {
    const date = new Date();
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const handleSubmitOpinion = () => {
    if (!opinion.trim()) return;

    const newOpinion: Opinion = {
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      content: opinion,
      author: '익명',
      vote: vote || '',
      isMine:true
    };

    setOpinions(prevOpinions => [newOpinion, ...prevOpinions]);
    setOpinion('');
  };

  return (
      <div className="bg-white w-full max-w-[1728px] flex items-start gap-10 py-8">
        {/* Question Section */}
        <section className="w-1/3 text-center flex flex-col h-full shrink-0 gap-4">
        <div className="flex flex-col p-6 border border-gray-300 rounded-lg gap-5">
        <div className="flex gap-8 items-center">
          <p className="text-2xl font-bold">{'<'}</p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center gap-2 mt-4">
              <Icon type="timer"/>
              <span className="text-base text-[#707070]">13:28</span>
            </div>
            <p className="text-2xl whitespace-pre-wrap break-keep">
              Q. 공무원과 정치인도 AI가 하면 더 효율적일까?
            </p>

          </div>
          <p className="text-2xl font-bold">{'>'}</p>
          </div>
          <div className="w-full h-px bg-gray-400"/>
          <div className="text-start flex flex-col gap-5">
<p className="text-base text-gray-400">Current Status</p>
          {/* Vote Statistics */}
          <div className="w-full flex justify-center">
            <div className="flex gap-6 w-full items-end px-6">
              <div className="text-center h-[150px] justify-end flex flex-col w-full">
              <div className="text-sm font-semibold">30%</div>
                <div className="h-[50%] w-full bg-black rounded-t-lg"></div>
                <div className="text-lg text-black shrink-0 mt-2">찬성</div>
                
              </div>
              <div className="text-center h-[150px] justify-end flex flex-col w-full">
                <div className="text-sm font-semibold">25%</div>
                <div className="h-[25%] w-full bg-black rounded-t-lg"></div>
                <div className="text-lg text-black shrink-0 mt-2">모름</div>
            
              </div>
              <div className="text-center h-[150px] justify-end flex flex-col w-full">
                <div className="text-sm font-semibold">45%</div>
                <div className="h-[90%] w-full bg-black rounded-t-lg"></div>  
                <div className="text-lg text-black shrink-0 mt-2">반대</div>
              </div>
            </div>
     
        </div>
        </div>
        <div className="w-full h-px bg-gray-400"/>
          {/* Selected Vote Display */}
          <div className="w-full text-start flex flex-col gap-3">
            <p className="text-base text-gray-400">My Choice</p>
            <div className="text-[24px] font-normal flex gap-5">
              {options.map(option => <div key={option} className={twMerge("text-center text-black w-full shrink border border-w-gray-300 rounded-md p-4", option === vote && 'bg-black text-white')}>
                {getVoteText(option)}
              </div>)}
            </div>
          </div>
          </div>
          <div className="rounded-lg flex items-center justify-center p-9 shrink bg-black text-white">
            ADS
          </div>
        </section>
        {/* Opinion Writing Section */}
        <section className="w-full flex justify-center flex-col gap-5 bg-gray-50 p-5 rounded-lg">
        {/* Opinions Display */}
        <div className="w-full">
          <div className="w-full space-y-6 h-[50vh] overflow-y-auto flex flex-col-reverse gap-5">
            {opinions.length === 0 ? (
              <div className="text-center text-gray-500 h-full flex items-end justify-center">아직 작성된 의견이 없습니다.</div>
            ) : (
              opinions.map((opinion) => (
                <div  key={opinion.id} className={twMerge("flex flex-col gap-1 w-full", opinion.isMine && 'items-end')}>
                             <div className="flex items-center gap-2 h-fit">
                      <p className="text-base text-[#000000]">{opinion.author}</p>
                      <div className="h-4 w-px bg-gray-500 shrink-0"/>
                      <p className={`text-base ${getVoteColor(opinion.vote)}`}>
                        {getVoteText(opinion.vote)}
                      </p>
                    </div>
                <div className={twMerge("flex gap-1 items-end", opinion.isMine && 'flex-row-reverse')}>
                <div className="bg-white p-6 rounded-lg max-w-[70%]">

                  <p className="text-xl text-[#000000]">{opinion.content}</p>
                </div>                  <div className="flex items-center justify-between">
         
         <span className="text-base text-[#777777]">
           {formatTimestamp()}
         </span>
       </div></div></div>
              ))
            )}
          </div>
        </div>
          <div className="w-full">
            <textarea
              value={opinion}
              onChange={(e) => setOpinion(e.target.value)}
              placeholder="의견을 작성해주세요..."
              className="w-full h-[150px] p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-gray-400"
            />
            <div className="flex justify-end mt-4">
              <Button
                onClick={handleSubmitOpinion}
                className="bg-[#151515] text-white px-8 py-3 rounded-lg hover:bg-[#303030]"
              >
                의견 등록하기
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
};