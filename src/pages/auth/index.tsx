import Button from "@/components/common/button";
import Icons from "@/components/common/icons";
import Box from "@/components/container/box";
import Wrapper from "@/components/container/wrapper";
import { A_appBarVisibility } from "@/context/recoil/atoms";
import { useCheckMedia } from "@/hooks/useCheckMedia";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSetRecoilState } from "recoil";

export const Login = () => {
  const navigate = useNavigate();
  const isMobile = useCheckMedia("mobile");
  const setAppBarVisible = useSetRecoilState(A_appBarVisibility);

  const loginConfirm = () => {
    setAppBarVisible(true);
    navigate("/home");
  };

  useEffect(() => {
    setAppBarVisible(false);
  }, []);

  return (
    <Wrapper className={`flex flex-1 w-[100%] flex-center p-4 bg-slate-400`}>
      <Box
        smooth={true}
        className="flex flex-col isDesktop:w-[450px] isTablet:w-[400px] isMobile:w-[90%] h-[35%] p-4"
      >
        <header className="flex flex-1 w-[100%] flex-center">HEADER</header>
        <section className="flex w-[100%] h-[60px] gap-2 flex-center">
          {!isMobile ? <Icons.User /> : <Icons.User size={20} />}
          <input className="w-[60%] isMobile:w-[70%] h-[40px]" type="text" />
        </section>
        <section className="flex w-[100%] h-[60px] gap-2 flex-center">
          {!isMobile ? <Icons.Key /> : <Icons.Key size={20} />}
          <input
            className="w-[60%] isMobile:w-[70%] h-[40px]"
            type="password"
          />
        </section>
        <section className="flex w-[100%] h-[60px] gap-2 flex-center">
          <Button size="md" color="cyan" onClick={() => loginConfirm()}>
            Login
          </Button>
        </section>
      </Box>
    </Wrapper>
  );
};

export default Login;
