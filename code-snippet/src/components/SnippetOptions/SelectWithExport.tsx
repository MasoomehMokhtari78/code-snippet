import { Button } from "../Button";
import { Select, SelectTrigger, SelectValue, SelectContent } from "../Select";

export function SelectWithExport({
  exportAsPng,
  exportAsSvg,
}: {
  exportAsPng: () => void;
  exportAsSvg: () => void;
}) {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Export as..." />
      </SelectTrigger>
      <SelectContent>
        <div className="flex flex-col gap-2 p-2">
          <Button size="sm" onClick={exportAsPng}>
            Export as PNG
          </Button>
          <Button size="sm" onClick={exportAsSvg}>
            Export as SVG
          </Button>
        </div>
      </SelectContent>
    </Select>
  );
}
