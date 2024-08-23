import Button from "@/components/common/button";
import { Chip } from "@/components/common/chip";
import Icons from "@/components/common/icons";
import Box from "@/components/container/box";
import Wrapper from "@/components/container/wrapper";
import { useCheckMedia } from "@/hooks/useCheckMedia";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/swiper-bundle.css";
import { Alert } from "@/components/common/Alert";
import Divider from "@/components/common/divider";
import Modal from "@/components/common/modal";
import { Chart_Pie } from "@/components/charts/Charts";

export const Home = () => {
  const isDesktop = useCheckMedia("desktop");
  const isMobile = useCheckMedia("mobile");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>("");

  const handler = {
    handleModal: () => {
      setModalIsOpen(!modalIsOpen);
    },
  };

  return (
    <Wrapper className={`flex flex-1 flex-col w-[100%] p-4 gap-4`}>
      <header className="flex justify-center">
        <h2>[JB] PWA TEMPLATE</h2>
      </header>
      <section
        className={`
        flex flex-1 w-[100%] gap-4 isMobile:flex-col isTablet:flex-col items-center
        `}
      >
        {isDesktop ? (
          <React.Fragment>
            <section className="flex w-[30%] h-[100%]">
              <Box
                smooth={true}
                className="w-[100%]"
                style={{
                  height: "calc(90% + 16px)",
                }}
              >
                <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                  <h2>BOX 1</h2>
                </header>
                <main className="flex flex-col flex-1 items-start p-4 w-[100%] gap-4 overflow-hidden">
                  <h4 className="border-b-[1px]">Buttons</h4>
                  <Button type="button" size="xl" color="blue">
                    example
                  </Button>
                  <Button type="button" size="lg" color="cyan">
                    example
                  </Button>
                  <Button type="button" size="md" color="green">
                    example
                  </Button>
                  <Button type="button" size="sm" color="orange">
                    example
                  </Button>
                  <Button type="button" size="xs" color="red">
                    example
                  </Button>
                  <Divider orientation="horizontal" />
                  <h1>This is "h1" Tag</h1>
                  <h2>This is "h2" Tag</h2>
                  <h3>This is "h3" Tag</h3>
                  <h4>This is "h4" Tag</h4>
                  <h5>This is "h5" Tag</h5>
                  <h6>This is "h6" Tag</h6>
                </main>
              </Box>
            </section>
            <section className="flex flex-col w-[70%] h-[100%] gap-4">
              <Box smooth={true} className="w-[100%] h-[45%]">
                <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                  <h2>BOX 2</h2>
                </header>
                <main className="flex flex-col flex-1 items-start p-4 w-[100%] gap-4 overflow-hidden">
                  <input
                    className="w-[240px h-[40px]"
                    placeholder="text input"
                  />
                  <input id="example-checkbox" type="checkbox" />
                  <label htmlFor="example-checkbox" />
                  <select className="w-[240px] h-[40px]">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      value={"1"}
                      onChange={(e) => setRadioValue(e.target.value)}
                      checked={radioValue === "1"}
                    />
                    <p>Radio-1</p>
                    <input
                      type="radio"
                      value={"2"}
                      onChange={(e) => setRadioValue(e.target.value)}
                      checked={radioValue === "2"}
                    />
                    <p>Radio-2</p>
                  </div>

                  <Divider orientation="horizontal" />
                  <section className="flex gap-2 items-end">
                    <Chip
                      size="lg"
                      color="gray"
                      onClick={() =>
                        Alert({
                          options: {
                            title: "TEST ALERT",
                            text: "aaa",
                            icon: "info",
                            showCloseButton: true,
                            showCancelButton: true,
                          },
                        })
                      }
                    >
                      <Icons.Warning size={18} fill="white" />
                      Alert
                    </Chip>
                    <Chip
                      size="md"
                      color="cyan"
                      onClick={() => handler.handleModal()}
                    >
                      Modal
                    </Chip>
                  </section>
                </main>
              </Box>
              <section className="flex gap-4 w-[100%] h-[45%]">
                <Box smooth={true} className="w-[50%] h-[100%]">
                  <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                    <h2>BOX 3</h2>
                  </header>
                  <Swiper
                    id="swiper-default"
                    pagination={true}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    maxBackfaceHiddenSlides={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    loop={true}
                  >
                    <SwiperSlide key={`slide-1`}>
                      <div className="flex w-[100%] h-[100%] flex-center bg-teal-400">
                        <h4>Slide 1</h4>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={`slide-2`}>
                      <div className="flex w-[100%] h-[100%] flex-center bg-yellow-400">
                        <h4>Slide 2</h4>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key={`slide-3`}>
                      <div className="flex w-[100%] h-[100%] flex-center bg-pink-400">
                        <h4>Slide 3</h4>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Box>
                <Box smooth={true} className="w-[50%] h-[100%]">
                  <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                    <h2>BOX 4</h2>
                  </header>
                  <section className="flex flex-1 w-[100%] h-[100%]">
                    <Chart_Pie
                      data={[
                        { name: "A", value: 10 },
                        { name: "B", value: 30 },
                        { name: "C", value: 20 },
                        { name: "D", value: 5 },
                      ]}
                    />
                  </section>
                  <Divider orientation="horizontal" />
                </Box>
              </section>
            </section>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box smooth={true} className="flex w-[100%]">
              <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                <h2>BOX 1</h2>
              </header>
              <main className="flex flex-col flex-1 items-start px-2 w-[100%] gap-4 py-4 overflow-hidden">
                <h4 className="border-b-[1px]">Buttons</h4>
                <Button type="button" size="xl" color="blue">
                  example
                </Button>
                <Button type="button" size="lg" color="cyan">
                  example
                </Button>
                <Button type="button" size="md" color="green">
                  example
                </Button>
                <Button type="button" size="sm" color="orange">
                  example
                </Button>
                <Button type="button" size="xs" color="red">
                  example
                </Button>
                <Divider orientation="horizontal" />
                <h1>This is "h1" Tag</h1>
                <h2>This is "h2" Tag</h2>
                <h3>This is "h3" Tag</h3>
                <h4>This is "h4" Tag</h4>
                <h5>This is "h5" Tag</h5>
                <h6>This is "h6" Tag</h6>
              </main>
            </Box>
            <Box smooth={true} className="flex w-[100%]">
              <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                <h2>BOX 2</h2>
              </header>
              <main className="flex flex-col flex-1 items-start p-4 w-[100%] gap-4">
                <input className="w-[240px h-[40px]" placeholder="text input" />
                <input id="example-checkbox" type="checkbox" />
                <label htmlFor="example-checkbox" />
                <select className="w-[240px] h-[40px]">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <Divider orientation="horizontal" />
                <section className="flex gap-2 items-end">
                  <Chip
                    size="lg"
                    color="gray"
                    onClick={() =>
                      Alert({
                        options: {
                          title: "TEST ALERT",
                          text: "aaa",
                          icon: "info",
                          showCloseButton: true,
                          showCancelButton: true,
                        },
                      })
                    }
                  >
                    <Icons.Warning size={18} fill="white" />
                    Alert
                  </Chip>
                  <Chip
                    size="md"
                    color="cyan"
                    onClick={() => handler.handleModal()}
                  >
                    Modal
                  </Chip>
                </section>
              </main>
            </Box>
            <Box smooth={true} className="flex w-[100%] h-[300px]">
              <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                <h2>BOX 3</h2>
              </header>
              <Swiper
                id="swiper-default"
                pagination={true}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                maxBackfaceHiddenSlides={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
              >
                <SwiperSlide key={`slide-1`}>
                  <div className="flex w-[100%] h-[100%] flex-center bg-teal-400">
                    <h4>Slide 1</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={`slide-2`}>
                  <div className="flex w-[100%] h-[100%] flex-center bg-yellow-400">
                    <h4>Slide 2</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={`slide-3`}>
                  <div className="flex w-[100%] h-[100%] flex-center bg-pink-400">
                    <h4>Slide 3</h4>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Box>
            <Box smooth={true} className="flex w-[100%] h-[300px]">
              <header className="flex w-[100%] h-[60px] border-b-[1px] flex-center">
                <h2>BOX 4</h2>
              </header>
              <section className="flex flex-1 w-[100%] h-[100%]">
                <Chart_Pie
                  data={[
                    { name: "A", value: 10 },
                    { name: "B", value: 30 },
                    { name: "C", value: 20 },
                    { name: "D", value: 5 },
                  ]}
                />
              </section>
            </Box>
          </React.Fragment>
        )}
      </section>
      {modalIsOpen && (
        <Modal
          width={isMobile ? "90%" : "60%"}
          height={"50%"}
          modalClose={handler.handleModal}
        >
          <header className="flex w-[100%] h-[60px] border-b-[1px]">
            <div className="flex w-[100%] h-[100%] justify-end items-center px-4">
              <button
                className={`
                          flex w-[36px] h-[36px] bg-gray-100 isDesktop:hover:bg-gray-300
                          flex-center rounded-xl
                          `}
                onClick={() => handler.handleModal()}
              >
                <Icons.X size={"60%"} fill="#666666" />
              </button>
            </div>
          </header>
          <main className="flex flex-col flex-1 w-[100%] py-4 gap-4">
            <div className="flex flex-col w-[100%] px-4">
              <h3>• This is Modal Components</h3>
              <pre>{`     "if you click ESC Button, close this Modal."`}</pre>
            </div>
            <Divider orientation="horizontal" />
          </main>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Home;
