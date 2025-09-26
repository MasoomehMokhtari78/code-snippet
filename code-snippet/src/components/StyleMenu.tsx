"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./Select";

function StyleDropdown({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  width,
  setWidth,
  height,
  setHeight,
  padding,
  setPadding,
}: {
  fontFamily: string;
  setFontFamily: (v: string) => void;
  fontSize: string;
  setFontSize: (v: string) => void;
  width: string;
  setWidth: (v: string) => void;
  height: string;
  setHeight: (v: string) => void;
  padding: string;
  setPadding: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track focus inside dropdown to keep it open
  useEffect(() => {
    function handleFocusIn(e: FocusEvent) {
      if (
        containerRef.current &&
        containerRef.current.contains(e.target as Node)
      ) {
        setOpen(true);
      }
    }
    function handleFocusOut(e: FocusEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.relatedTarget as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <Button onClick={() => setOpen((prev) => !prev)} variant="outline">
        Style
      </Button>

      {open && (
        <div className="absolute left-0 mt-1 w-72 bg-popover border rounded-md shadow p-3 flex flex-col gap-3 z-50">
          {/* Font Family */}
          <Select value={fontFamily} onValueChange={setFontFamily}>
            <SelectTrigger>
              <SelectValue placeholder="Font" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Font</SelectLabel>
                <SelectItem value="monospace">Monospace</SelectItem>
                <SelectItem value="cursive">Cursive</SelectItem>
                <SelectItem value="sans-serif">Sans-serif</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Font Size */}
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger>
              <SelectValue placeholder="Font Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Font Size</SelectLabel>
                {["12px", "14px", "16px", "18px", "20px"].map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Width */}
          <Input
            type="text"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />

          {/* Height */}
          <Input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* Padding */}
          <Input
            type="text"
            placeholder="Padding"
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default StyleDropdown;
