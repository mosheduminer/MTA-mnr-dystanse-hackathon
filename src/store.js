import { writable } from "svelte/store";

export const currentStation = writable({});

export const stationsList = writable([]);

export const selectedTrain = writable(undefined);

export const trainsData = writable([]);