import type { Main } from "tsparticles-core";
import { StrokeColorUpdater } from "./StrokeColorUpdater";

export function loadStrokeColorUpdater(tsParticles: Main): void {
    tsParticles.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater(container));
}