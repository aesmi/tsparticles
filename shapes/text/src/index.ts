import type { Main } from "tsparticles-core";
import { validTypes, TextDrawer } from "./TextDrawer";

export function loadTextShape(tsParticles: Main): void {
    const drawer = new TextDrawer();

    for (const type of validTypes) {
        tsParticles.addShape(type, drawer);
    }
}