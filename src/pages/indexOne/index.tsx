import Button from "@/components/common/button";
import Pagination from "@/components/common/pagination";
import Box from "@/components/container/box";
import Wrapper from "@/components/container/wrapper";
import { Queries } from "@/services/react-query/queries";
import React, { useEffect, useState } from "react";

const tableHeader = [
  { id: 0, name: "", width: 40 },
  { id: 1, name: "No", width: 80 },
  { id: 2, name: "Column 1" },
  { id: 3, name: "Column 2" },
  { id: 4, name: "Column 3" },
  { id: 5, name: "Column 4" },
  { id: 6, name: "Function", width: 140 },
];

export const IndexOne = () => {
  const [checkIndex, setCheckIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const tableData = Queries.query.getIndexoneQuery();

  const handler = {
    handleCheck: (id: number) => {
      if (checkIndex === id) {
        setCheckIndex(null);
      } else {
        setCheckIndex(id);
      }
    },
    handleCurrentPage: (page: number) => {
      setCurrentPage(page);
    },
  };

  return (
    <Wrapper className={`flex flex-1 flex-col p-4 gap-4`}>
      {tableData.data && (
        <React.Fragment>
          <header className="flex justify-center">
            <h2>INDEX-1</h2>
          </header>
          <section className="flex flex-1">
            <Box smooth={true} className="w-[100%] h-[95%]">
              <header className="flex w-[100%] min-h-[60px] border-b-[1px]">
                <div className="flex w-[50%] h-[100%] px-4 items-center">
                  <h4>• Table Component</h4>
                </div>
              </header>
              <main className="flex flex-col gap-2 items-center overflow-auto flex-wrap">
                <table>
                  <thead>
                    <tr>
                      {tableHeader.map((item, idx) => (
                        <React.Fragment key={`th-${idx}`}>
                          <th
                            style={{
                              width: item.width && item.width,
                            }}
                          >
                            {item.name}
                          </th>
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.data?.data.map((item, idx) => (
                      <React.Fragment key={`td-${idx}`}>
                        <tr>
                          <td>
                            <input
                              id={`example-checkbox-${idx}`}
                              type="checkbox"
                              checked={checkIndex === idx ? true : false}
                              onChange={() => handler.handleCheck(idx)}
                            />
                            <label htmlFor={`example-checkbox-${idx}`} />
                          </td>
                          <td>{item.No}</td>
                          <td>{item.Column1}</td>
                          <td>{item.Column2}</td>
                          <td>{item.Column3}</td>
                          <td>{item.Column4}</td>
                          <td>
                            <Button
                              size="xs"
                              color="cyan"
                              onClick={() => alert(`row-${item.No}`)}
                            >
                              func
                            </Button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                <Pagination
                  totalPage={tableData.data.totalPage}
                  currentPage={currentPage}
                  hasNext={tableData.data.hasNext}
                  hasPrevious={tableData.data.hasPrevious}
                  onPageChange={(page) => handler.handleCurrentPage(page)}
                />
              </main>
            </Box>
          </section>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default IndexOne;
