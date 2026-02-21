export type Platform = "selfRide" | "pillion" | "passenger4x4"
export type Style = "gravel" | "scenic" | "technical"
export type Region = "cape" | "namibia" | "botswana"

export type ComfortLevel = "explorer" | "adventure" | "premium"

export interface BuilderState {
  platform: Platform
  duration: number
  style: Style
  region: Region
  comfort: ComfortLevel
}