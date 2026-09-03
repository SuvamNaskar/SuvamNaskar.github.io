"use client";

import React, { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function HeroTerminal() {
  const [typedCmd1, setTypedCmd1] = useState("");
  const [showOut1, setShowOut1] = useState(false);
  const [typedCmd2, setTypedCmd2] = useState("");
  const [showOut2, setShowOut2] = useState(false);
  const [typedCmd3, setTypedCmd3] = useState("");
  const [showOut3, setShowOut3] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const cmd1 = "whoami --academic";
  const cmd2 = "cat qualifications.rec";
  const cmd3 = "telemetry --stream";

  useEffect(() => {
    let isCancelled = false;
    setTypedCmd1("");
    setShowOut1(false);
    setTypedCmd2("");
    setShowOut2(false);
    setTypedCmd3("");
    setShowOut3(false);
    setIsComplete(false);

    const runScript = async () => {
      // Brief initial delay before typing starts
      await new Promise((r) => setTimeout(r, 450));
      if (isCancelled) return;

      // 1. Type Command 1
      for (let i = 1; i <= cmd1.length; i++) {
        if (isCancelled) return;
        setTypedCmd1(cmd1.slice(0, i));
        await new Promise((r) => setTimeout(r, 42 + Math.random() * 25));
      }
      await new Promise((r) => setTimeout(r, 220));
      if (isCancelled) return;
      setShowOut1(true);

      // Pause before next command
      await new Promise((r) => setTimeout(r, 420));
      if (isCancelled) return;

      // 2. Type Command 2
      for (let i = 1; i <= cmd2.length; i++) {
        if (isCancelled) return;
        setTypedCmd2(cmd2.slice(0, i));
        await new Promise((r) => setTimeout(r, 38 + Math.random() * 22));
      }
      await new Promise((r) => setTimeout(r, 220));
      if (isCancelled) return;
      setShowOut2(true);

      // Pause before next command
      await new Promise((r) => setTimeout(r, 420));
      if (isCancelled) return;

      // 3. Type Command 3
      for (let i = 1; i <= cmd3.length; i++) {
        if (isCancelled) return;
        setTypedCmd3(cmd3.slice(0, i));
        await new Promise((r) => setTimeout(r, 38 + Math.random() * 22));
      }
      await new Promise((r) => setTimeout(r, 220));
      if (isCancelled) return;
      setShowOut3(true);
      setIsComplete(true);

      // Hold complete state for 12 seconds so visitors can read everything, then loop
      await new Promise((r) => setTimeout(r, 12000));
      if (isCancelled) return;
      setReplayKey((k) => k + 1);
    };

    runScript();

    return () => {
      isCancelled = true;
    };
  }, [replayKey]);

  const handleRestart = () => {
    setReplayKey((k) => k + 1);
  };

  return (
    <div className="w-full max-w-md brutalist-card overflow-hidden bg-white shadow-brutalist-lg select-none hover:-translate-y-1 transition-transform duration-200">
      {/* Vintage Mac OS Window Title Bar */}
      <div className="bg-[#e8e8e8] border-b-2.5 border-black px-4 py-2.5 flex items-center justify-between font-mono text-[11px] font-bold text-black">
        <div className="flex items-center space-x-1.5">
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <span className="tracking-wide">academic-station.term</span>
        <div className="flex items-center space-x-2.5">
          <button
            onClick={handleRestart}
            title="Replay terminal animation"
            className="flex items-center space-x-1 text-slate-600 hover:text-black transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="text-[9px] uppercase">Rerun</span>
          </button>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-[10px] text-slate-700">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Retro CRT Terminal Screen Body */}
      <div className="bg-[#121314] text-slate-200 p-5 font-mono text-[11px] md:text-xs leading-relaxed space-y-3.5 relative overflow-hidden min-h-[345px] md:min-h-[355px] flex flex-col justify-start">
        {/* Scanline Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,19,20,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-40" />

        {/* Block 1: Academic Identity Query */}
        <div className="relative z-10 space-y-1">
          <div className="flex items-center text-[#ffde59]">
            <span className="text-slate-400 mr-2">suvam@rkmvcc:~$</span>
            <span>{typedCmd1}</span>
            {!showOut1 && <span className="w-2 h-3.5 bg-[#ffde59] ml-1 animate-pulse" />}
          </div>
          {showOut1 && (
            <div className="pl-3 border-l-2 border-slate-700 text-slate-300 space-y-0.5 text-[11px]">
              <div><span className="text-slate-500">SCHOLAR:</span> Suvam Naskar</div>
              <div><span className="text-slate-500">DEGREE:</span> M.Sc. in Computer Science</div>
              <div><span className="text-slate-500">COLLEGE:</span> RKMVCC, Kolkata</div>
            </div>
          )}
        </div>

        {/* Block 2: Qualifications & Honors */}
        {showOut1 && (
          <div className="relative z-10 space-y-1">
            <div className="flex items-center text-[#5ce1e6]">
              <span className="text-slate-400 mr-2">suvam@rkmvcc:~$</span>
              <span>{typedCmd2}</span>
              {!showOut2 && <span className="w-2 h-3.5 bg-[#5ce1e6] ml-1 animate-pulse" />}
            </div>
            {showOut2 && (
              <div className="pl-3 border-l-2 border-[#5ce1e6]/40 space-y-1 text-[11px]">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#ffe680] text-black font-bold px-1.5 py-0.5 text-[10px] uppercase">UGC NET</span>
                  <span className="text-emerald-400 font-bold">Qualified (LS / AP)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-[#5ce1e6] text-black font-bold px-1.5 py-0.5 text-[10px] uppercase">AWS</span>
                  <span className="text-slate-300">Certified Cloud Practitioner</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Block 3: Research Telemetry Stream */}
        {showOut2 && (
          <div className="relative z-10 space-y-1">
            <div className="flex items-center text-emerald-400">
              <span className="text-slate-400 mr-2">suvam@rkmvcc:~$</span>
              <span>{typedCmd3}</span>
              {!showOut3 && <span className="w-2 h-3.5 bg-emerald-400 ml-1 animate-pulse" />}
            </div>
            {showOut3 && (
              <div className="pl-3 border-l-2 border-emerald-500/40 text-[10px] text-slate-300 space-y-0.5">
                <div className="flex items-center justify-between">
                  <span>[RSTC-IoT] Sensor Array</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>[WireGuard] Mesh Tunnel</span>
                  <span className="text-emerald-400 font-bold">● 0ms LATENCY</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>[Upasthiti] Campus Geo</span>
                  <span className="text-emerald-400 font-bold">● 25m BOUND</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Interactive / Blinking Cursor Prompt */}
        {isComplete && (
          <div className="relative z-10 pt-1 flex items-center text-slate-400 text-xs">
            <span className="mr-2">rkmvcc-lab:~$</span>
            <span className="text-white">ready</span>
            <span className="w-2 h-4 bg-[#ffde59] ml-1 animate-pulse" />
          </div>
        )}
      </div>

      {/* Vintage Window Bottom Status Bar */}
      <div className="bg-[#e8e8e8] border-t-2.5 border-black px-4 py-2 flex items-center justify-between font-mono text-[10px] font-bold text-slate-700">
        <span>MEM: 64MB // OS: RETRO-MAC</span>
        <span className="text-black bg-[#ffde59] px-1.5 py-0.5 border border-black uppercase">TTY1 // UTF-8</span>
      </div>
    </div>
  );
}

