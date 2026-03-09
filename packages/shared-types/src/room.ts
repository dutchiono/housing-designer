/** Axis-aligned bounding dimensions in meters */
export interface RoomDimensions {
  width: number;   // X axis
  depth: number;   // Z axis
  height: number;  // Y axis
}

/** Cardinal wall faces + floor/ceiling */
export type FaceId = 'north' | 'south' | 'east' | 'west' | 'floor' | 'ceiling';

export type RoomCategory =
  | 'bedroom'
  | 'bathroom'
  | 'kitchen'
  | 'living'
  | 'dining'
  | 'hallway'
  | 'stairwell'
  | 'garage'
  | 'laundry'
  | 'office'
  | 'utility'
  | 'outdoor';

export interface RoomModule {
  id: string;
  name: string;
  category: RoomCategory;
  dimensions: RoomDimensions;
  /** Snap connectors on each face — multiple per face allowed (e.g. two doorways on north wall) */
  connectors: SnapConnector[];
  /** Pre-wired systems nodes for this room template */
  systemsNodes: SystemsNode[];
  /** Which finish zones this room exposes (e.g. floor, walls, ceiling, cabinetry) */
  finishZones: FinishZoneId[];
  /** Default material skin applied before user customization */
  defaultSkin: Partial<RoomSkinAssignment>;
}

export interface PlacedRoom {
  instanceId: string;
  moduleId: string;
  /** Position of room origin (bottom-front-left corner) in world space, meters */
  position: Vec3;
  /** Rotation in 90-degree increments around Y axis: 0 | 90 | 180 | 270 */
  rotationY: 0 | 90 | 180 | 270;
  levelIndex: number;
  skinOverrides: Partial<RoomSkinAssignment>;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

import type { SnapConnector } from './connector';
import type { SystemsNode } from './systems';
import type { FinishZoneId, RoomSkinAssignment } from './materials';
