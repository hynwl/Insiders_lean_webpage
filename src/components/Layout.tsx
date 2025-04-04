import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import { twMerge } from 'tailwind-merge';
import PATH from '../constants/path';

const NAVIGATION_ITEMS = [
  { label: "오늘의토론", href: PATH.OPINION },
  { label: "이주의칼럼", href: PATH.BOARD },
  { label: "타임라인", href: PATH.TIMELINE },
  { label: "ABOUT US", href: PATH.ABOUT },
];

export const Layout = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const checkCurrentPath = (path: string, href: string) => pathname.includes(path) && pathname.includes(href);

  return (
    <div className="layout min-h-screen flex flex-col lg:max-w-[1200px] w-full px-5 lg:mx-auto">
      <header className="header py-2 px-8">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer shrink-0" onClick={() => navigate('/')}>
            {/* 찬 아이콘 */}
            <div className="flex items-center">
              <div className="relative">
                <img
                  className="w-[41px] h-[41px]"
                  alt="Blue circle icon"
                  src="/---5.png"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[19px]">
                  찬
                </div>
              </div>
              <img
                className="w-4 h-[3px]"
                alt="Line"
                src="/---50.svg"
              />
            </div>

            {/* 로고 텍스트 */}
            <div className="flex flex-col">
              <span className="font-bold text-[35px]">정.거.장</span>
              <span className="text-sm text-[#5c5c5c] font-bold">정치를 거론하는 장</span>
            </div>

            {/* 반 아이콘 */}
            <div className="flex items-center">
              <img
                className="w-4 h-[3px]"
                alt="Line"
                src="/---49.svg"
              />
              <div className="relative">
                <img
                  className="w-[41px] h-[41px]"
                  alt="Red circle icon"
                  src="/---4.png"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[19px]">
                  반
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu - Center */}
          <NavigationMenu className="flex-1 flex justify-center">
            <NavigationMenuList className="flex space-x-4">
              {NAVIGATION_ITEMS.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className="flex items-center justify-center px-6 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                    href={item.href}
                  >
                    <span className={twMerge("font-normal text-[#707070] text-lg lg:text-2xl whitespace-nowrap", checkCurrentPath(pathname, item.href) && "text-[#141414]")}>
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Profile - Right */}
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
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-100 py-6 relative left-1/2 w-screen -translate-x-1/2">
        <div className="container mx-auto">
          {/* 푸터 내용 */}
        </div>
      </footer>
    </div>
  );
}; 