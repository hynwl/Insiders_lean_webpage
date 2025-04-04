import { useState } from "react";
import Icon from "../../components/Icon";

const MOCK_FOLLOW_STATUS = [
  {
    label: '칼럼',
    count: '14'
  },
  {
    label: '팔로워',
    count: '37'
  },
  {
    label: '팔로잉',
    count: '82'
  }
]

const MOCK_MONEY = ['￦ 3,000', '￦ 5,000', '￦ 10,000', '￦ 20,000', '￦ 30,000']

export const Board = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => setIsOpen((pre) => !pre)
  return <main className="flex gap-10 py-4 h-full">
    <section className="w-1/3 text-center flex flex-col items-center shrink-0 gap-12 h-full sticky top-5">
    <div className="w-full text-center flex flex-col items-center h-full shrink-0 gap-8 shadow-lg rounded-xl p-6">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          {/* Avatar */}
          <div className="flex items-center shrink-0 size-[50px]">
                  <div className="relative">
                    <img
                    className="w-full h-full rounded-full aspect-square shrink-0"
                    alt="User profile"
                    src="/le-01029.png"
                  />
                  <img
                    className="absolute size-[calc(100%-8px)] top-[4px] left-[4px] rounded-full aspect-square shrink-0"
                    alt="User profile inner"
                    src="/le-01029-1.png"
                  />
                </div>
          </div>
          <div>
            <p className="text-lg font-medium">단현서</p>
            <p className="text-sm text-gray-500">정치에 관심많은 대학생입니다.</p>
          </div>
        </div>
        <div className="flex gap-12">
          {MOCK_FOLLOW_STATUS.map(status => <div className="flex flex-col gap-1 text-center">
            <p className="text-lg text-black font-medium">{status.count}</p>
            <p className="text-xs text-gray-500">{status.label}</p>
          </div>)}
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <button className="w-full bg-gray-200 rounded-lg p-3">
          나의 활동
        </button>
        <button className="w-full bg-black text-white rounded-lg p-3 flex gap-3 items-center justify-center">
          <Icon type="pencil"/>
          칼럼 작성하기
        </button>
      </div>
      </div>
      <div className="bg-black text-white w-full h-full text-center py-28 rounded-lg">
        ADS
      </div>
    </section>
    <section className="w-full flex justify-start flex-col gap-5 bg-gray-50 p-5 rounded-lg">
      <div className="w-full flex gap-4 justify-start">
        <div className="rounded-full py-1 px-6 bg-black text-white">
          모든 칼럼
        </div>
        <div className="rounded-full py-1 px-6 bg-gray-300 text-black">
          팔로잉 칼럼
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {/* Card */}
        <div className="w-full flex flex-col gap-5 bg-white rounded-xl p-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-4 items-center">
                <div className="flex items-center shrink-0 size-[48px]">
                    <div className="relative">
                      <img
                        className="size-[100%] rounded-full aspect-square shrink-0"
                        alt="User profile inner"
                        src="/le-01029-1.png"
                      />
                    </div>
                </div>
                <p className="text-lg font-medium">단현서</p>
                <p className="text-sm text-gray-500">2025년 3월 31일</p>
              </div>
              <div className="border border-black px-3 rounded-full">
                Follow
              </div>
            </div>
            <p className="text-xl font-medium text-start w-full">정치인의 말과 행동, 신뢰의 기준은 어디에?</p>
            <p className="whitespace-pre-wrap break-keep text-justify text-[16px] leading-loose">{`정치는 말의 예술이다. 하지만 한국 정치에서 정치인의 말과 행동이 신뢰를 잃는 경우가 많다.\n공약과 다르게 흘러가는 정책, 선거철마다 반복되는 ‘국민과의 약속’이라는 문구,\n그리고 논란이 터질 때마다 등장하는 ‘기억나지 않는다’는 해명이 국민의 신뢰를 흔든다.\n그렇다면 정치인의 신뢰를 평가하는 기준은 어디에 두어야 할까?\n\n먼저, 정치인의 언행 일치는 신뢰의 핵심이다.\n선거 전과 후의 발언이 극명하게 다르다면 국민은 혼란스럽고 실망할 수밖에 없다.\n후보 시절에는 ‘서민 경제를 살리겠다’며 다양한 복지 정책을 내세우지만, 정작 당선 후에는\n‘예산 부족’을 이유로 약속을 지키지 않는 경우가 많다. 물론 정치적 환경이 바뀔 수 있고,\n현실적인 어려움이 있을 수 있다. 그러나 그러한 변화를 솔직하게 설명하고,\n대안을 마련하는 것이 책임 있는 정치의 모습이 아닐까?\n\n둘째, 투명한 의사소통이 중요하다. 정치인은 국민의 대표로서 정책 결정 과정에서 명확한 입장을 밝히고, 국민과 소통해야 한다. 하지만 종종 불분명한 표현과 애매한 태도로 논란을 피하려는 모습이 보인다. ‘적극 검토하겠다’, ‘충분히 논의할 예정이다’라는 표현이 반복될수록 국민은 정치인의 말을 신뢰하기 어려워진다. 중요한 사안에 대해서는 명확한 입장을 밝히고, 약속을 지키지 못했을 때는 솔직하게 이유를 설명하는 태도가 필요하다.\n\n마지막으로, 정치인의 사과 방식도 신뢰를 좌우한다. 논란이 발생하면 책임을 회피하거나, 정치적 이해관계를 고려한 ‘반쪽짜리 사과’가 등장하는 경우가 많다. 하지만 국민이 원하는 것은 변명이나 계산된 사과가 아니라, 진정성 있는 태도와 구체적인 개선 방안이다. 단순히 “죄송합니다”라고 말하는 것이 아니라, 앞으로 어떻게 문제를 해결할 것인지에 대한 실질적인 대책을 제시해야 한다.\n\n정치는 신뢰를 기반으로 한다. 국민이 믿을 수 있는 정치, 그리고 정치인의 말이 가벼워지지 않는 사회가 되려면 언행의 일치, 투명한 소통, 그리고 책임감 있는 태도가 필수적이다. 정치인의 신뢰를 쌓는 것은 단순한 이미지 메이킹이 아니라, 행동을 통해 증명되는 것이다`}</p>
            <div className="h-px bg-gray-300 my-4"/>
            <p className="text-2xl whitespace-pre-wrap text-center font-medium">{'작가의 정치활동을 '}<span className="bg-yellow-500 bg-opacity-20">응원</span>{'하여\n함께 칼럼을 완성해 보세요.'}</p>
            <div className="flex justify-center">
            <button className="bg-black text-white w-fit px-28 py-3 rounded-full text-lg flex items-center gap-3" onClick={handleModal}>
              <Icon type="money"/>
              응원하기
            </button>
            </div>
            <div className="w-full flex justify-start">
              <div className="rounded-xl bg-gray-200 px-4 py-2 flex items-center gap-2">
                <Icon type="like"/>
                29
              </div>
            </div>
        </div>
      </div>
    </section>
    {isOpen && <aside className="fixed z-30 top-0 left-0 w-screen h-screen bg-white overflow-y-auto">
      <button className="fixed top-10 right-10 text-4xl" onClick={handleModal}>X</button>
      <div className="max-w-[900px] mx-auto py-20 flex flex-col gap-20 ">
        <p className="whitespace-pre-wrap text-3xl font-semibold">{'칼럼이 좋았다면,\n'}<span className="bg-yellow-500 bg-opacity-20">응원</span>{'을 보내주세요!'}</p>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-gray-600 font-medium">응원 금액</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-6">
            <div className="w-full border-b border-black py-4 flex justify-center font-medium">
              직접 입력하기
            </div>
            {MOCK_MONEY.map(item => <div className="w-full border rounded-full border-black py-4 flex justify-center font-medium">
              {item}
            </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-gray-600 font-medium">응원 쪽지</p>
          <textarea placeholder="작가님의 칼럼 활동을 응원합니다." className="border resize-none p-4 outline-none border-black h-[200px]"/>
        </div>
        <div className="flex items-start gap-4">
          <Icon type="warning"/>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-black font-medium">응원하기 이용안내</p>
            <div className="flex flex-col gap-2">
            <p className="text-base text-gray-600">정치 활동에 대한 감사와 격려의 의미로 작가를 응원합니다.</p>
            <p className="text-base text-gray-600">'응원하기'는 자발적 결제이므로 환불이 불가능합니다.</p>
            <p className="text-base text-gray-600">'응원하기'는 만 14세 이상 사용자만 이용할 수 있습니다.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <button className="bg-black text-white w-fit px-24 py-4 rounded-full text-lg flex items-center gap-3" onClick={handleModal}>
              응원하기
            </button>
        </div>
      </div>
    </aside>}
  </main>;
};
