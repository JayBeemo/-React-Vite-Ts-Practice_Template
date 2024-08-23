import Box from "@/components/container/box";
import Wrapper from "@/components/container/wrapper";
import { useCallback, useEffect, useRef, useState } from "react";

///////////////////////// 예시 데이터 생성 함수 //////////////////////////
interface exampleData {
  id: number;
  name: string;
}

const generateExample = (start: number, count: number): exampleData[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: start + i + 1,
    name: `example-${start + i + 1}`,
  }));
};
/////////////////////////////////////////////////////////////////////////////

export const SubMenuTwo = () => {
  const [data, setData] = useState<exampleData[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (element: HTMLDivElement) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreData();
        }
      });

      if (element) observerRef.current.observe(element);
    },
    [hasMore]
  );

  const loadInitialData = () => {
    const initialBeers = generateExample(0, 20);
    setData(initialBeers);
  };

  const loadMoreData = () => {
    setData((prev) => {
      const newData = generateExample(prev.length, 20);
      if (prev.length + newData.length >= 100) {
        setHasMore(false);
      }
      return [...prev, ...newData].slice(0, 100);
    });
  };

  useEffect(() => {
    loadInitialData(); // 초기 데이터 로드
  }, []);

  return (
    <Wrapper className="flex flex-1 flex-col p-4 gap-4">
      <header className="flex justify-center">
        <h2>INDEX-2 Sub-2</h2>
      </header>
      <main
        id="infinity-container"
        className="flex flex-col relative w-full gap-8"
      >
        {data.map((item, idx) => (
          <div
            key={`data-${item.id}`}
            ref={idx === data.length - 1 ? lastElementRef : null}
            className="flex flex-center"
          >
            <Box
              smooth={true}
              className={`
              w-[80%] isMobile:w-[100%] h-[160px] p-4 gap-4
              `}
            >
              <h3 className="border-b-[1px]">{item.name}</h3>
              <div className="flex flex-col gap-2">
                <h4>{`This is Infinite Scroll with 100 rows.`}</h4>
                <h6>{`This is data-${item.id} row.`}</h6>
              </div>
            </Box>
          </div>
        ))}
      </main>
    </Wrapper>
  );
};

export default SubMenuTwo;
