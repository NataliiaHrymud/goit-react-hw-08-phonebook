import React from "react";
import Avatar from "avataaars";

const avatarTop = [
  "Eyepatch",
  "Hat",
  "Hijab",
  "LongHairBigHair",
  "LongHairBob",
  "LongHairBun",
  "LongHairCurly",
  "LongHairCurvy",
  "LongHairDreads",
  "LongHairFrida",
  "LongHairFro",
  "LongHairFroBand",
  "LongHairMiaWallace",
  "LongHairNotTooLong",
  "LongHairShavedSides",
  "LongHairStraight",
  "LongHairStraight2",
  "LongHairStraightStrand",
  "NoHair",
  "ShortHairDreads01",
  "ShortHairDreads02",
  "ShortHairFrizzle",
  "ShortHairShaggyMullet",
  "ShortHairShortCurly",
  "ShortHairShortFlat",
  "ShortHairShortRound",
  "ShortHairShortWaved",
  "ShortHairSides",
  "ShortHairTheCaesar",
  "ShortHairTheCaesarSidePart",
  "Turban",
  "WinterHat1",
  "WinterHat2",
  "WinterHat3",
  "WinterHat4",
];
const avatarAccessories = [
  "Blank",
  "Kurt",
  "Prescription01",
  "Prescription02",
  "Round",
  "Sunglasses",
  "Wayfarers",
];
const avatarFacialHair = [
  "BeardLight",
  "BeardMajestic",
  "BeardMedium",
  "Blank",
  "MoustacheFancy",
  "MoustacheMagnum",
];
const avatarMouth = [
  "Concerned",
  "Default",
  "Disbelief",
  "Eating",
  "Grimace",
  "Sad",
  "ScreamOpen",
  "Serious",
  "Smile",
  "Tongue",
  "Twinkle",
  "Vomit",
];
const avatarSkinColor = [
  "Tanned",
  "Yellow",
  "Pale",
  "Light",
  "Brown",
  "DarkBrown",
  "Black",
];

const randomType = function (list) {
  return list[Math.floor(Math.random() * list.length)];
};

function Avatars() {
  return (
    <Avatar
      style={{ width: "100px", height: "100px" }}
      avatarStyle="Circle"
      topType={randomType(avatarTop)}
      accessoriesType={randomType(avatarAccessories)}
      facialHairType={randomType(avatarFacialHair)}
      mouthType={randomType(avatarMouth)}
      skinColor={randomType(avatarSkinColor)}
    />
  );
}

export default Avatars;
