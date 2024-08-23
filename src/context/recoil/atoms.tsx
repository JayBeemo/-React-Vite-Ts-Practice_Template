import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const A_appBarVisibility = atom<boolean>({
  key: "A_appBarVisibility",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
