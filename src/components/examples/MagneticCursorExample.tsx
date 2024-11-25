import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Import custom components
import { DocumentLayout } from "@/components/common/DocumentLayout";
import { ComponentCard } from "@/components/common/ComponentCard";
import { CodeExample } from "@/components/common/CodeExample";
import { LivePreviewCard } from "@/components/common/LivePreviewCard";
import BreadcrumbMaker from "../common/Breadcrumb";
import SEO from '../common/SEO';
import MagneticCursor from "../cursor/common/MagneticCursor";

const MagneticCursorExample = () => {
  const codeToDisplay = ``;

  const codeToDisplayHook = `
"use client";
import { type RefObject, useLayoutEffect, useRef, useState } from "react";

interface MouseState {
  x: number | null;
  y: number | null;
  elementX: number | null;
  elementY: number | null;
  elementPositionX: number | null;
  elementPositionY: number | null;
}

export function useMouse(): [MouseState, RefObject<HTMLDivElement>] {
  const [state, setState] = useState<MouseState>({
    x: null,
    y: null,
    elementX: null,
    elementY: null,
    elementPositionX: null,
    elementPositionY: null,
  });
  
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newState: Partial<MouseState> = {
        x: event.pageX,
        y: event.pageY,
      };

      if (ref.current instanceof Element) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;
        
        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }
      setState((s) => ({ ...s, ...newState }));
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [state, ref];
}
`;

  return (
    <DocumentLayout
      title="Magnetic Cursor"
      description="Interactive Magnetic cursor tracking component"
      keywords={['react', 'cursor', 'interaction', 'mouse tracking']}
    >
      {/* Breadcrumb */}
      <BreadcrumbMaker />

      {/* Live Demo Section */}
      <ComponentCard
        title="Magnetic Cursor Component"
        description="An interactive React component that tracks and visualizes cursor movement"
      >
        <LivePreviewCard>
          <MagneticCursor />
        </LivePreviewCard>
      </ComponentCard>

      {/* Implementation Section */}
      <ComponentCard
        title="Component Implementation"
        description="Detailed code breakdown of the Magnetic Cursor component."
      >
        <div className="space-y-4">
          {/* Code Example for Magnetic Cursor */}
          <CodeExample
            title="Magnetic Cursor Component"
            code={codeToDisplay}
            fileName="./MagneticCursorExample.tsx"
            badgeText="TSX"
          />

          {/* Separator */}
          <Separator className="my-4" />

          {/* Code Example for Custom Mouse Hook */}
          <CodeExample
            title="Custom Mouse Hook"
            code={codeToDisplayHook}
            fileName="./use-mouse.ts"
            badgeText="TS"
          />
        </div>
      </ComponentCard>
    </DocumentLayout>
  );
};

export default MagneticCursorExample;
