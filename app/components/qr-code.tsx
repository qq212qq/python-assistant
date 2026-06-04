'use client';

import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeDisplayProps {
  text: string;
  size?: number;
}

export function QRCodeDisplay({ text, size = 180 }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, text, {
      width: size,
      margin: 2,
      color: { dark: '#1E293B', light: '#FFFFFF' },
    }).catch(() => setError(true));
  }, [text, size]);

  if (error) {
    return (
      <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/20"
        style={{ width: size, height: size }}>
        <p className="text-sm text-muted-foreground">二维码生成失败</p>
      </div>
    );
  }

  return (
    <div className="inline-block rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
      <canvas ref={canvasRef} width={size} height={size} className="rounded-lg" />
    </div>
  );
}
