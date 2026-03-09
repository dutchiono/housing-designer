export type FinishZoneId =
  | 'floor'
  | 'walls'
  | 'ceiling'
  | 'baseboard'
  | 'crown-moulding'
  | 'window-casing'
  | 'door-casing'
  | 'interior-doors'
  | 'exterior-cladding'
  | 'roof'
  | 'kitchen-cabinets-upper'
  | 'kitchen-cabinets-lower'
  | 'kitchen-countertop'
  | 'kitchen-backsplash'
  | 'bathroom-tile-floor'
  | 'bathroom-tile-wall'
  | 'bathroom-vanity'
  | 'bathroom-fixtures'
  | 'hardware-finish'
  | 'curtains-blinds'
  | 'fireplace-surround'
  | 'stair-treads'
  | 'stair-risers'
  | 'stair-railing'
  | 'garage-floor'
  | 'soffit'
  | 'fascia'
  | 'gutters';

export type MaterialCategory =
  | 'wood'
  | 'painted-wood'
  | 'tile'
  | 'stone'
  | 'brick'
  | 'concrete'
  | 'metal'
  | 'glass'
  | 'fabric'
  | 'vinyl'
  | 'carpet'
  | 'hemp'
  | 'stucco'
  | 'composite';

export interface MaterialSkin {
  id: string;
  name: string;
  category: MaterialCategory;
  /** PBR texture set — paths relative to assets/textures/ */
  textures: {
    albedo: string;
    normal?: string;
    roughness?: string;
    metallic?: string;
    ao?: string;
    displacement?: string;
  };
  /** Real-world texture repeat scale in meters */
  tileScale: { u: number; v: number };
  /** Human-readable finish description, e.g. "White Oak Hardwood, matte" */
  description: string;
  tags: string[];
}

export interface TrimProfile {
  id: string;
  name: string;
  /** SVG path string of the profile cross-section */
  profileSvg: string;
  heightMm: number;
  projectionMm: number;
  category: 'baseboard' | 'crown' | 'casing' | 'chair-rail' | 'panel-moulding';
}

export interface FinishCatalogItem {
  zoneId: FinishZoneId;
  skinId: string;
  trimProfileId?: string;
  /** Overrides for color tint on a base skin (e.g. paint color on a plaster skin) */
  colorHex?: string;
  /** Curtain/blind style id if applicable */
  windowTreatmentId?: string;
}

/** Full skin assignment for a placed room */
export type RoomSkinAssignment = Record<FinishZoneId, FinishCatalogItem>;
