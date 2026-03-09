import type { FaceId, Vec3 } from './room';

export type ConnectorType = 'doorway' | 'open-pass' | 'stair-up' | 'stair-down' | 'exterior-wall';

export interface SnapConnector {
  id: string;
  /** Which face of the room this connector sits on */
  face: FaceId;
  /** Local offset along the face edge, normalized 0..1 (0 = left/bottom, 1 = right/top) */
  offsetNormalized: number;
  type: ConnectorType;
  /** Width of the opening in meters (doorway = 0.9, open-pass = varies) */
  openingWidth: number;
  /** Height of the opening in meters */
  openingHeight: number;
  /** If true, this connector MUST connect to another room (e.g. stairwell landing) */
  required: boolean;
}

/**
 * A resolved connection between two placed rooms.
 * Created by the SnapResolver when two connectors are aligned.
 */
export interface ResolvedSnap {
  roomA: string;        // PlacedRoom instanceId
  connectorA: string;   // SnapConnector id on roomA
  roomB: string;
  connectorB: string;
  /** Whether the MEP systems were successfully auto-routed across this snap */
  systemsResolved: boolean;
  validationErrors: string[];
}
