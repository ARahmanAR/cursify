
import { AdvancedCodeBlock } from "@/pages/document/components/AdvanceCodeBlock";
import { Badge } from "@/components/ui/badge";
interface CodeExampleProps {
  title: string;
  code: string;
  fileName: string;
  language?: string;
  badgeText?: string;
}

export function CodeExample({
  title,
  code,
  fileName,
  language = "typescript",
  badgeText = "TSX"
}: CodeExampleProps) {
  return (
    <div>
      <h4 className="scroll-m-20 mb-2  text-xl font-semibold tracking-tight">
        {title}
        <Badge className="ml-4">{badgeText}</Badge>
      </h4>
      <AdvancedCodeBlock
        code={code}
        fileName={fileName}
        lang={language}
      />
    </div>
  );
}