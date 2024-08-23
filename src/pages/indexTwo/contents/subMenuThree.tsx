import Button from "@/components/common/button";
import Dialog from "@/components/common/dialog";
import Icons from "@/components/common/icons";
import Wrapper from "@/components/container/wrapper";
import { useEffect, useState } from "react";

export const SubMenuThree = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handler = {
    handleOpenDialog: () => {
      setIsDialogOpen(true);
    },
    handleCloseDialog: () => {
      setIsDialogOpen(false);
    },
  };

  /////////////////////////////////////////////////////////////////////////
  type T_ecoSystem = {
    id: number;
    name: string;
    value: number;
    isOn: boolean;
  };

  const [status, setStatus] = useState<T_ecoSystem | null>(null);

  useEffect(() => {
    if (status && status.id > 0) {
      setStatus((prev) => ({
        ...prev,
        id: status.id + 1,
        name: "test",
        isOn: true,
        value: status.value + 1,
      }));
    }
  }, [status]);

  /////////////////////////////////////////////////////////////////////////
  return (
    <Wrapper className="flex flex-1 flex-col p-4 gap-4">
      <header className="flex justify-center">
        <h2>INDEX-2 Sub-3</h2>
      </header>
      <main
        id="infinity-container"
        className="flex flex-col relative w-full gap-8"
      >
        <section className="flex w-[100%] flex-center">
          <Button
            size="xl"
            color="cyan"
            className="w-[180px] isMobile:w-[160px]"
            onClick={() => handler.handleOpenDialog()}
          >
            Open Dialog
          </Button>
        </section>
        <Dialog open={isDialogOpen} closeDialog={handler.handleCloseDialog}>
          <main className="flex flex-col w-full h-full p-4 gap-4">
            <h1>• This is Full-Screen Dialog Example</h1>
            <div className="w-full border-t-2"></div>
          </main>
        </Dialog>
      </main>
    </Wrapper>
  );
};

export default SubMenuThree;
