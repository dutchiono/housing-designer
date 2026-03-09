import type { PlacedRoom } from './room';
import type { ResolvedSnap } from './connector';

export interface Level {
  index: number;
  name: string;
  /** Floor-to-floor height in meters (floor slab top to next floor slab top) */
  floorToFloorHeight: number;
  /** Y position of this level's floor in world space, meters */
  elevationY: number;
}

export interface HouseDesign {
  id: string;
  name: string;
  levels: Level[];
  placedRooms: PlacedRoom[];
  resolvedSnaps: ResolvedSnap[];
  /** Overall exterior skin applied to the whole building shell */
  exteriorSkinId?: string;
  roofStyleId?: string;
  createdAt: string;
  updatedAt: string;
}
