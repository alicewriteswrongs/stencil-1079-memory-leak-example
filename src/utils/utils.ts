import { writeTask } from '@stencil/core'

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const getTimeGivenProgression = (
  p0: number[],
  p1: number[],
  p2: number[],
  p3: number[],
  progression: number
): number[] => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map((tValue) => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};

/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0: number, p1: number, p2: number, p3: number, t: number) => {
  const partA = 3 * p1 * Math.pow(t - 1, 2);
  const partB = -3 * p2 * t + 3 * p2 + p3 * t;
  const partC = p0 * Math.pow(t - 1, 3);

  return t * (partA + t * partB) - partC;
};

/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0: number, p1: number, p2: number, p3: number, refPoint: number): number[] => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;

  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);

  return roots.filter((root) => root >= 0 && root <= 1);
};

const solveCubicEquation = (a: number, b: number, c: number, d: number) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }

  b /= a;
  c /= a;
  d /= a;

  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }

  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [
      Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3,
    ];
  }

  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);

  return [
    s * Math.cos(phi / 3) - b / 3,
    s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
    s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3,
  ];
};

const solveQuadraticEquation = (a: number, b: number, c: number) => {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};

export const assert = (actual: any, reason: string) => {
  if (!actual) {
    const message = 'ASSERT: ' + reason;
    console.error(message);
    debugger; // eslint-disable-line
    throw new Error(message);
  }
};

export const printIonWarning = (message: string, ...params: any[]) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};

export const lifecycle = (el: HTMLElement | undefined, eventName: string) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false,
    });
    el.dispatchEvent(ev);
  }
};

export const setPageHidden = (el: HTMLElement, hidden: boolean) => {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  } else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};
