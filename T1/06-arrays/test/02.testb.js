import { describe, it, expect, test } from "vitest";
import { divideixPerTipus } from "../Exercicis/02-sol.js";

test("classifica els elements en nombres, strings i objectes", () => {
    const entrada = [
        "Hola",
        12,
        "Món",
        {},
        { id: 15 },
        ["lala"],
    ];

    const esperat = {
        nombres: [12],
        strings: ["Hola", "Món"],
        objectes: [{}, { id: 15 }, ["lala"]],
    };

    expect(divideixPerTipus(entrada)).toEqual(esperat);
});
test("retorna les tres categories buides quan l’entrada és buida", () => {
    expect(divideixPerTipus([])).toEqual({
        nombres: [],
        strings: [],
        objectes: [],
    });
});

test("classifica altres valors i conserva l’ordre dins de cada categoria", () => {
    expect(divideixPerTipus([7, "Adeu", -2, { id: 1 }, "JS",0]))
        .toEqual({
            nombres: [7, -2, 0],
            strings: ["Adeu", "JS"],
            objectes: [{ id: 1 }],
        });
});