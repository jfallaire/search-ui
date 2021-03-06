/// <reference path="../../lib/magic-box/index.d.ts" />

// The reference to magic-box with the triple slash is needed for dts-generator

import { IOmniboxData, IOmniboxDataRow } from '../ui/Omnibox/OmniboxInterface';

export interface IPopulateOmniboxEventArgs extends IOmniboxData {
}

export interface IPopulateOmniboxEventRow extends IOmniboxDataRow {
}

export interface IOmniboxPreprocessResultForQueryEventArgs {
  result: Coveo.MagicBox.Result;
}

export interface ICloseOmniboxEventArgs {
}

export class OmniboxEvents {
  public static populateOmnibox = 'populateOmnibox';
  public static openOmnibox = 'openOmnibox';
  public static closeOmnibox = 'closeOmnibox';

  public static populateOmniboxSuggestions = 'populateOmniboxSuggestions';
  public static omniboxPreprocessResultForQuery = 'omniboxPreprocessResultForQuery';
}
