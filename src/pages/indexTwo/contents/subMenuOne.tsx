import { Tab, TabPanel, Tabs } from "@/components/common/tabs";
import Box from "@/components/container/box";
import Wrapper from "@/components/container/wrapper";
import { useState } from "react";

export const SubMenuOne = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handler = {
    tabChange: (newValue: number) => {
      if (tabValue !== newValue) {
        setTabValue(newValue);
      }
    },
  };

  return (
    <Wrapper className="flex flex-1 flex-col p-4 gap-4">
      <header className="flex justify-center">
        <h2>INDEX-2 Sub-1</h2>
      </header>
      <main className="flex flex-1 flex-col">
        <Tabs>
          <Tab
            tabIndex={0}
            value={tabValue}
            name="Tab-1"
            tabChange={handler.tabChange}
          />
          <Tab
            tabIndex={1}
            value={tabValue}
            name="Tab-2"
            tabChange={handler.tabChange}
          />
          <Tab
            tabIndex={2}
            value={tabValue}
            name="Tab-3"
            tabChange={handler.tabChange}
          />
        </Tabs>
        <TabPanel tabIndex={0} value={tabValue}>
          <div className="flex w-[100%] h-[100%] flex-center">
            <Box
              smooth={true}
              className="flex w-[80%] isMobile:w-[100%] h-[80%] p-4 gap-2"
            >
              <h1 className="border-b-[1px]">This is Tab-1 Panel</h1>
              <h5>1번 탭 패널</h5>
            </Box>
          </div>
        </TabPanel>
        <TabPanel tabIndex={1} value={tabValue}>
          <div className="flex w-[100%] h-[100%] flex-center">
            <Box
              smooth={true}
              className="flex w-[80%] isMobile:w-[100%] h-[80%] p-4 gap-2"
            >
              <h1 className="border-b-[1px]">This is Tab-2 Panel</h1>
              <h5>2번 탭 패널</h5>
            </Box>
          </div>
        </TabPanel>
        <TabPanel tabIndex={2} value={tabValue}>
          <div className="flex w-[100%] h-[100%] flex-center">
            <Box
              smooth={true}
              className="flex w-[80%] isMobile:w-[100%] h-[80%] p-4 gap-2"
            >
              <h1 className="border-b-[1px]">This is Tab-3 Panel</h1>
              <h5>3번 탭 패널</h5>
            </Box>
          </div>
        </TabPanel>
      </main>
    </Wrapper>
  );
};

export default SubMenuOne;
