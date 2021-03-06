import { $$, Dom } from './Dom';

declare var require: (svgPath: string) => string;

export class SVGIcons {
  public static search = require('svg/search');
  public static more = require('svg/more');
  public static facetLoading = require('svg/facet-loading');
  public static checkboxMoreValues = require('svg/checkbox-hook-exclusion-more');
  public static arrowUp = require('svg/arrow-up');
  public static arrowDown = require('svg/arrow-down');
}
