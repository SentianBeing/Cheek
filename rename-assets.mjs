import fs from 'fs';
import path from 'path';

const dir = 'public/images/Other assets';
const files = fs.readdirSync(dir);

const map = {
  '04983760': 'laptop-sweater.jpg',
  '04a4155a': 'omm-blat-balm.jpg',
  '0b4cf520': 'bed-mug-blur.jpg',
  '0da41f5a': 'matcha-coffee-blur.jpg',
  '1cff25de': 'iced-coffee-close.jpg',
  '1dfca7d2': 'cheeky-velour-suit.jpg',
  '2a2a8d9b': 'pink-candles-drink.jpg',
  '39304939': 'two-iced-coffees.jpg',
  '3d5029c2': 'cherry-lip-balm.jpg',
  '4507fc87': 'car-laughing-drinks.jpg',
  '4d1ceb7f': 'camera-street-drink.jpg',
  '53945b9c': 'pink-bow-drinks.jpg',
  '6013f076': 'tote-bag-rack.jpg',
  '6250e4aa': 'cheeky-coaster.jpg',
  '79ba8962': 'leopard-phone.jpg',
  '917a919b': 'table-coffee-bags.jpg',
  'a2f790f4': 'charm-bag.jpg',
  'addb820d': 'sunglasses-coffee.jpg',
  'b0bf19c0': 'bed-tray-breakfast.jpg',
  'b1f326cd': 'car-mirror-toy.jpg',
  'bbec5e70': 'pouring-milk.jpg',
  'c3a45782': 'iced-latte-swirl.jpg',
  'c43a6330': 'flatlay-accessories.jpg',
  'caae5c97': 'cherry-cocktail.jpg',
  'cbf74375': 'pouring-matcha.jpg',
  'd6021c74': 'louis-vuitton-charms.jpg',
  'e29f2e78': 'bed-arm-mug.jpg',
  'fa5d3153': 'black-hair-model.jpg',
  'fbf041f0': 'two-matchas-tray.jpg',
};

for (const file of files) {
  const prefix = file.substring(0, 8);
  if (map[prefix]) {
    const ext = path.extname(file);
    const newName = map[prefix].replace('.jpg', ext);
    fs.renameSync(path.join(dir, file), path.join(dir, newName));
    console.log(`Renamed ${file} -> ${newName}`);
  }
}
