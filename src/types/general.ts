import React from "react";

export interface Viewport {
  width: number;
  height: number;
  device: Device;
}

export enum Device {
  DEFAULT = 0,
  SM = 640,
  MD = 768,
  LG = 1024,
  XL = 1280,
  XXL = 1536,
}
