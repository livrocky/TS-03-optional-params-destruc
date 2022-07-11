/* eslint-disable no-console */
import { allImageArr } from './main.js';

const imgDivEl = document.getElementById('images') as HTMLDivElement | null;

const addImages = (arr: string[], dest: HTMLDivElement | null): void => {
  if (!dest) return;
  // dest.innerHTML = '<h2> hello </h2>';
  arr.forEach((url: string): void => {
    const imgEl: HTMLImageElement = document.createElement('img');
    imgEl.src = url;
    dest.appendChild(imgEl);
  });
};

addImages(allImageArr, imgDivEl);
