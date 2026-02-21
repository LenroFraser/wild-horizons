import type { Platform, Region, ComfortLevel, Style } from "@/types/builder"

export const BASE_PRICE_PER_DAY: Record<Platform, number> = {
  selfRide: 1500,
  pillion: 1200,
  passenger4x4: 1800,
}

export const REGION_MODIFIER: Record<Region, number> = {
  cape: 0,
  namibia: 2500,
  botswana: 2000,
}

export const COMFORT_MODIFIER: Record<ComfortLevel, number> = {
  explorer: 0,
  adventure: 1200,
  premium: 2500,
}

export const STYLE_MULTIPLIER: Record<Style, number> = {
  gravel: 1,
  scenic: 1.1,
  technical: 1.25,
}