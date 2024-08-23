/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [], //purge에서 제거할 클래스 추가
  important: true,
  theme: {
    screens: {
      isMobile: { max: "599px" },
      isTablet: { min: "600px", max: "1239px" },
      isDesktop: { min: "1240px" },
      isNotMobile: { min: "599px" },
    },
    extend: {
      fontFamily: {
        PTD_ExtraBold: ["Pretendard_ExtraBold"],
        PTD_Bold: ["Pretendard_Bold"],
        PTD_Semibold: ["Pretendard_SemiBold"],
        PTD_Medium: ["Pretendard_Medium"],
        PTD_Regular: ["Pretendard_Regular"],
      },
      keyframes: {
        collapse_in: {
          from: { maxHeight: 0 },
          to: { maxHeight: 500 },
        },
        fade_in: {
          from: { opacity: 0 },
          to: { opacity: 100 },
        },
        fade_out: {
          from: { opacity: 100 },
          to: { opacity: 0 },
        },
        smoothAppear: {
          from: {
            transform: "translateY(-2vh)",
            opacity: 0,
          },
          to: {
            transform: "translate(0)",
            opacity: 1,
          },
        },
        slide_up: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slide_down: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(100%)",
          },
        },
      },
      animation: {
        collapse_in: "collapse_in 0.8s ease 0s 1 normal none",
        fade_in: "fade_in 0.4s ease 0s 1 normal none",
        fade_out: "fade_out 0.4s ease 0s 1 normal none",
        smoothAppear: "smoothAppear 0.6s ease 0s 1 normal none",
        slide_up: "slide_up 0.2s ease-in-out 0s 1 normal none",
        slide_down: "slide_down 0.2s ease-in-out 0s 1 normal none",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          "@apply justify-center items-center": "",
        },
      });
    },
  ],
};
