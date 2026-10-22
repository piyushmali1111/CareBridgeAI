import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ShieldCheck, Undo2, Trash2, Eye, EyeOff, Sparkles, Check, Lock } from 'lucide-react';

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ImageRedactionCanvasProps {
  originalImageSrc: string;
  onRedactedImageChange: (redactedDataUrl: string, redactionCount: number) => void;
  fileName?: string;
}

export const ImageRedactionCanvas: React.FC<ImageRedactionCanvasProps> = ({
  originalImageSrc,
  onRedactedImageChange,
  fileName,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);
  const [redactions, setRedactions] = useState<Rect[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [currentRect, setCurrentRect] = useState<Rect | null>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  // Load image object whenever originalImageSrc changes
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImageObj(img);
      setRedactions([]);
      setCurrentRect(null);
    };
    img.src = originalImageSrc;
  }, [originalImageSrc]);

  // Render canvas with image and black boxes
  const renderCanvas = useCallback(
    (includeRedactions = true, activeRect: Rect | null = null) => {
      const canvas = canvasRef.current;
      if (!canvas || !imageObj) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas dimensions to match actual image resolution
      canvas.width = imageObj.naturalWidth || imageObj.width;
      canvas.height = imageObj.naturalHeight || imageObj.height;

      // Draw original image
      ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

      if (includeRedactions) {
        // Draw confirmed black boxes
        ctx.fillStyle = '#000000';
        for (const rect of redactions) {
          ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }

        // Draw actively dragging rect
        if (activeRect) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
          ctx.fillRect(activeRect.x, activeRect.y, activeRect.w, activeRect.h);

          // Subtle guide border
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          ctx.strokeRect(activeRect.x, activeRect.y, activeRect.w, activeRect.h);
        }
      }

      // Export redacted image data URL
      try {
        const exportedUrl = canvas.toDataURL('image/jpeg', 0.9);
        onRedactedImageChange(exportedUrl, redactions.length);
      } catch (e) {
        console.warn('Canvas export note:', e);
      }
    },
    [imageObj, redactions, onRedactedImageChange]
  );

  useEffect(() => {
    renderCanvas(!showOriginal, currentRect);
  }, [renderCanvas, showOriginal, currentRect]);

  // Convert client mouse/touch coordinates to internal canvas resolution
  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (showOriginal) return;
    const coords = getCanvasCoords(e);
    setIsDrawing(true);
    setStartPos(coords);
    setCurrentRect({ x: coords.x, y: coords.y, w: 0, h: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPos) return;
    const coords = getCanvasCoords(e);

    const x = Math.min(startPos.x, coords.x);
    const y = Math.min(startPos.y, coords.y);
    const w = Math.abs(coords.x - startPos.x);
    const h = Math.abs(coords.y - startPos.y);

    setCurrentRect({ x, y, w, h });
  };

  const handleMouseUp = () => {
    if (!isDrawing || !currentRect) return;
    setIsDrawing(false);
    setStartPos(null);

    // Only add if box has a meaningful size (ignore tiny clicks)
    if (currentRect.w > 10 && currentRect.h > 10) {
      setRedactions((prev) => [...prev, currentRect]);
    }
    setCurrentRect(null);
  };

  // Undo last blackbox
  const handleUndo = () => {
    setRedactions((prev) => prev.slice(0, -1));
  };

  // Clear all blackboxes
  const handleClear = () => {
    setRedactions([]);
  };

  // 1-Click Auto Redact demo header for quick testing
  const handleAutoRedactDemo = () => {
    if (!imageObj) return;
    const w = imageObj.naturalWidth || 800;
    const h = imageObj.naturalHeight || 1000;

    // Redact Patient name and MRN area at typical header position
    const demoRedactions: Rect[] = [
      { x: Math.round(w * 0.05), y: Math.round(h * 0.17), w: Math.round(w * 0.45), h: Math.round(h * 0.045) },
      { x: Math.round(w * 0.62), y: Math.round(h * 0.17), w: Math.round(w * 0.32), h: Math.round(h * 0.045) },
    ];
    setRedactions(demoRedactions);
  };

  return (
    <div className="space-y-3">
      {/* Privacy Redaction Toolbar */}
      <div className="bg-slate-900 text-white p-3 sm:p-4 rounded-xl flex flex-wrap items-center justify-between gap-3 border border-slate-800">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wide">
                Privacy Redactor: Blackbox Personal Details
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {redactions.length} {redactions.length === 1 ? 'box' : 'boxes'} applied
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Drag on the image to draw black boxes over Name, MRN, Phone, or Address.
            </p>
          </div>
        </div>

        {/* Toolbar Buttons */}
        <div className="flex items-center space-x-2 flex-wrap gap-1.5">
          {/* Quick Demo Redact button */}
          <button
            type="button"
            onClick={handleAutoRedactDemo}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-teal-900/60 hover:bg-teal-900 text-teal-200 border border-teal-700/80 flex items-center space-x-1 transition"
            title="Auto-blackbox patient name and MRN fields for demo"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Auto-Redact PII</span>
          </button>

          {/* Undo Button */}
          <button
            type="button"
            disabled={redactions.length === 0}
            onClick={handleUndo}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 disabled:opacity-40 flex items-center space-x-1 transition"
            title="Undo last black box"
          >
            <Undo2 className="w-3.5 h-3.5" />
            <span>Undo</span>
          </button>

          {/* Clear All Button */}
          <button
            type="button"
            disabled={redactions.length === 0}
            onClick={handleClear}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 disabled:opacity-40 flex items-center space-x-1 transition"
            title="Remove all black boxes"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Clear</span>
          </button>

          {/* Preview Toggle Button */}
          <button
            type="button"
            onClick={() => setShowOriginal(!showOriginal)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1 transition"
            title={showOriginal ? 'Show with blackboxes' : 'View unredacted original'}
          >
            {showOriginal ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-teal-400" />
                <span>Show Blackboxes</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                <span>Peek Original</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Drawing Canvas Container */}
      <div
        ref={containerRef}
        className="relative bg-slate-100 rounded-xl border-2 border-slate-300 overflow-hidden shadow-inner flex items-center justify-center p-2 cursor-crosshair select-none max-h-[520px] overflow-y-auto"
      >
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="max-w-full h-auto rounded-lg shadow-sm block bg-white"
          style={{ maxHeight: '480px', objectFit: 'contain' }}
        />

        {redactions.length === 0 && !isDrawing && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/85 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-slate-700 pointer-events-none flex items-center space-x-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Click &amp; drag on any personal details to draw black privacy boxes</span>
          </div>
        )}
      </div>

      {/* Confirmation indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span className="flex items-center text-emerald-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
          {redactions.length > 0
            ? `${redactions.length} personal detail ${redactions.length === 1 ? 'box' : 'boxes'} permanently blacked out before AI transmission`
            : 'No areas redacted yet. Drag to blackbox any sensitive text.'}
        </span>
        <span className="text-slate-400 truncate max-w-xs">{fileName}</span>
      </div>
    </div>
  );
};
