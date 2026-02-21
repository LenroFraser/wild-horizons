import type { BuilderState } from "@/types/builder"

import {
  BASE_PRICE_PER_DAY,
  REGION_MODIFIER,
  COMFORT_MODIFIER,
  STYLE_MULTIPLIER,
} from "./pricingConfig"

export function calculatePrice(state: BuilderState) {
  const basePerDay = BASE_PRICE_PER_DAY[state.platform] ?? 0
  const baseTotal = basePerDay * state.duration

  const regionExtra = REGION_MODIFIER[state.region] ?? 0
  const comfortExtra = COMFORT_MODIFIER[state.comfort] ?? 0
  const styleMultiplier = STYLE_MULTIPLIER[state.style] ?? 1

  const subtotal = baseTotal + regionExtra + comfortExtra

  return Math.round(subtotal * styleMultiplier)
}