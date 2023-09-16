import { ModelResult } from "./ModelResult";

export interface TextResult {
  id: number;
  uuid: string;
  sentenceText: string;
  modelResultId: number | null;
  modelResult?: ModelResult; // This is an optional property to store the associated ModelResult object
}
