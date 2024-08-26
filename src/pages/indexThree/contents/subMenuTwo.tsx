import Button from "@/components/common/button";
import Snackbar from "@/components/common/snackbar";
import Box from "@/components/container/box";
import Wrapper from "@/components/container/wrapper";
import { useEffect, useMemo, useState } from "react";
import { ColDef, ColGroupDef, RowSpanParams } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

export const SubMenuTwo = () => {
  const [openSnack, setOpenSnack] = useState<boolean>(false);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      headerClass: "font-PTD_Semibold text-[14px]",
    };
  }, []);

  const gridData = [
    {
      id: 1,
      name: "AAA",
      total: {
        tco2: 34.351,
        kgch4: 3456.25,
        kgn2o: 65.85,
        tco2eq: 78.569,
      },
      jan: {
        tco2: 345,
        kgch4: 42,
        kgn2o: 5,
        tco2eq: 45,
      },
    },
    {
      id: 2,
      name: "BBB",
      total: {
        tco2: 34.351,
        kgch4: 3456.25,
        kgn2o: 65.85,
        tco2eq: 78.569,
      },
      jan: {
        tco2: 345.351,
        kgch4: 42,
        kgn2o: 5,
        tco2eq: 45,
      },
    },
    {
      id: 3,
      name: "CCC",
      total: {
        tco2: 34.351,
        kgch4: 3456.25,
        kgn2o: 65.85,
        tco2eq: 78.569,
      },
      jan: {
        tco2: 345,
        kgch4: 42,
        kgn2o: 5,
        tco2eq: 45,
      },
    },
  ];

  const transformedData = gridData.flatMap((item) => [
    {
      id: item.id,
      name: item.name,
      metric: "TCO2",
      total: item.total.tco2,
      jan: item.jan.tco2,
    },
    {
      id: item.id,
      name: item.name,
      metric: "KGCH4",
      total: item.total.kgch4,
      jan: item.jan.kgch4,
    },
    {
      id: item.id,
      name: item.name,
      metric: "KGN2O",
      total: item.total.kgn2o,
      jan: item.jan.kgn2o,
    },
    {
      id: item.id,
      name: item.name,
      metric: "TCO2EQ",
      total: item.total.tco2eq,
      jan: item.jan.tco2eq,
    },
  ]);

  const rowSpan = (params: RowSpanParams): number => {
    const data = params.data;
    const rowIndex = params.node?.rowIndex;
    if (rowIndex) {
      if (
        rowIndex === 0 ||
        transformedData[rowIndex - 1].id !== transformedData[rowIndex].id
      ) {
        const span = transformedData.filter(
          (item) => item.id === data.id
        ).length;
        return span;
      } else {
        return 1;
      }
    }

    return 4;
  };

  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      headerName: "ID",
      field: "id",
      rowSpan: rowSpan,
      cellClassRules: {
        "ag-span": "value !== undefined",
      },
    },
    {
      headerName: "Name",
      field: "name",
      rowSpan: rowSpan,
      cellClassRules: {
        "ag-span": "value !== undefined",
      },
    },
    {
      headerName: "단위",
      field: "metric",
      sortable: false,
      cellClassRules: {
        "ag-my-cell": "value !== undefined",
      },
    },
    {
      headerName: "Total",
      field: "total",
      sortable: false,
      cellClassRules: {
        "ag-my-cell": "value !== undefined",
      },
    },
    {
      headerName: "Jan",
      field: "jan",
      sortable: false,
      cellClassRules: {
        "ag-my-cell": "value !== undefined",
      },
    },
  ]);

  const handler = {
    handleOpenSnack: () => {
      setOpenSnack(true);
    },
    handleCloseSnack: () => {
      setOpenSnack(false);
    },
  };
  return (
    <Wrapper className="flex flex-1 flex-col p-4 gap-4">
      <header className="flex justify-center">
        <h2>INDEX-3 Sub-2</h2>
      </header>
      <main className="flex flex-col flex-center relative w-full gap-4">
        <Box
          smooth={true}
          scaleAnimation={true}
          className="flex-center w-[40%] isMobile:w-[90%] h-[300px] gap-2"
        >
          <h2>This is SnackBar Example</h2>
          <Button
            size="xl"
            color="cyan"
            onClick={() => handler.handleOpenSnack()}
          >
            SnackBar
          </Button>
        </Box>
        <Box
          smooth={true}
          className="flex-center w-[80%] isMobile:w-[90%] h-[300px] gap-2"
        >
          <div
            className="ag-theme-alpine"
            style={{
              width: "100%",
              maxHeight: 300,
              minHeight: 300,
            }}
          >
            <AgGridReact
              rowData={transformedData}
              columnDefs={columnDefs}
              suppressDragLeaveHidesColumns={true}
              suppressMovableColumns={true}
              headerHeight={40}
              rowHeight={30}
              defaultColDef={defaultColDef}
              suppressRowTransform={true}
            />
          </div>
        </Box>
      </main>
      <Snackbar
        open={openSnack}
        handleClose={handler.handleCloseSnack}
        duration={5000}
      >
        <p>This is SnackBar Example.</p>
      </Snackbar>
    </Wrapper>
  );
};

export default SubMenuTwo;
