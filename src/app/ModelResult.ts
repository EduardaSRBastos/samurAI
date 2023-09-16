import { LabelResult } from "./LabelResult";

export interface ModelResult {
  id: number;
  uuid: string;
  modelName: string;
  labels: LabelResult[];
}
