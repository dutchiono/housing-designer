import type { Vec3 } from './room';

export type SystemType = 'hvac' | 'plumbing-supply' | 'plumbing-drain' | 'electrical' | 'gas' | 'data';

export type SystemNodeRole =
  | 'supply-register'      // HVAC supply air register
  | 'return-register'      // HVAC return air
  | 'ahu-unit'             // Air handling unit / furnace
  | 'duct-stub'            // HVAC stub-out at wall/floor for cross-room routing
  | 'supply-stub'          // Plumbing cold/hot supply stub
  | 'drain-stub'           // Plumbing drain stub
  | 'vent-stack'           // Plumbing vent stack penetration
  | 'panel-stub'           // Electrical panel or sub-panel location
  | 'circuit-stub'         // Electrical circuit stub at wall
  | 'outlet'
  | 'switch'
  | 'light-fixture'
  | 'gas-stub'
  | 'data-stub';

export interface SystemsNode {
  id: string;
  system: SystemType;
  role: SystemNodeRole;
  /** Local position within the room module, meters from room origin */
  localPosition: Vec3;
  /** Which face/wall this node exits through (for stub routing) */
  exitFace?: 'north' | 'south' | 'east' | 'west' | 'floor' | 'ceiling';
  /** Pipe/duct diameter in mm */
  diameter?: number;
  /** For electrical: circuit amperage */
  amperage?: number;
  /** Notes for the builder */
  notes?: string;
}

export interface SystemsResolutionResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  /** Auto-generated routing segments connecting stubs across snapped rooms */
  routingSegments: RoutingSegment[];
}

export interface RoutingSegment {
  system: SystemType;
  fromNodeId: string;
  toNodeId: string;
  /** World-space waypoints for the routed pipe/duct/conduit */
  path: Vec3[];
  /** Diameter or conduit size in mm */
  diameter: number;
}
