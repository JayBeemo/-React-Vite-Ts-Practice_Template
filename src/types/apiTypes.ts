export type T_getIndexoneData = {
  totalPage: number;
  currentPage: number;
  perPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  totalItems: number;
  data: {
    No: string;
    Column1: string;
    Column2: string;
    Column3: string;
    Column4: string;
  }[];
};
