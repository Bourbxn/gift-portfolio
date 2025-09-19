import type { ImageSet } from "../../../constants/projects";

interface Props {
    imgSets: ImageSet[][];
    fixedCols: boolean;
}

function ImageSetsPreview({ imgSets, fixedCols }: Props) {
    const getMdColsStyle = (imgSets: ImageSet[]) => {
        const totalCols = imgSets.reduce((acc, cur) => acc + (cur.colSpan || 1), 0);
        const colsMap: Record<number, string> = {
            1: "md:grid-cols-1",
            2: "md:grid-cols-2",
            3: "md:grid-cols-3",
            4: "md:grid-cols-4",
            5: "md:grid-cols-5",
            6: "md:grid-cols-6",
            7: "md:grid-cols-7",
            8: "md:grid-cols-8",
            9: "md:grid-cols-9",
            10: "md:grid-cols-10",
            11: "md:grid-cols-11",
            12: "md:grid-cols-12",
        };
        return colsMap[totalCols] || "md:grid-cols-1";
    };

    const getColsStyle = (imgSets: ImageSet[]) => {
        const totalCols = imgSets.reduce((acc, cur) => acc + (cur.colSpan || 1), 0);
        const colsMap: Record<number, string> = {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            7: "grid-cols-7",
            8: "grid-cols-8",
            9: "grid-cols-9",
            10: "grid-cols-10",
            11: "grid-cols-11",
            12: "grid-cols-12",
        };
        return colsMap[totalCols] || "grid-cols-1";
    };

    const getColSpanStyle = (colSpan: number): string => {
        const colSpanClasses: Record<number, string> = {
            1: "col-span-1",
            2: "col-span-2",
            3: "col-span-3",
            4: "col-span-4",
            5: "col-span-5",
            6: "col-span-6",
            7: "col-span-7",
            8: "col-span-8",
            9: "col-span-9",
            10: "col-span-10",
            11: "col-span-11",
            12: "col-span-12",
        };
        return colSpanClasses[colSpan] || "col-span-1";
    };
    return (
        <div className="md:space-y-[24px] space-y-[8px]">
            {imgSets.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`grid ${getMdColsStyle(row)} ${fixedCols ? getColsStyle(row) : "grid-cols-1"}  md:gap-x-[24px] gap-x-0 md:gap-y-0 gap-y-[8px]`}
                >
                    {row.map(({ img, colSpan, title }, colIndex) => (
                        <div
                            className={`${getColSpanStyle(colSpan || 1)}`}
                            key={`img-${rowIndex}-${colIndex}`}
                        >
                            {title && (
                                <p className="font-normal text-description md:text-normal text-small pb-[8px]">
                                    {title}:
                                </p>
                            )}
                            <img src={img} alt={`img-${rowIndex}-${colIndex}`} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ImageSetsPreview;
