import prisma from "../config/prisma";
import { Artist } from "../types";

export const createArtist = async (data: Artist) => {
  const existingArtist = await prisma.artist.findFirst({
    where: {
      firstName: data.firstName,
      lastName: data.lastName,
    },
  });

  if (existingArtist) {
    throw new Error("Artist already registered!");
  }

  const artist = await prisma.artist.create({
    data: {
      branchId: data.branchId,
      firstName: data.firstName,
      lastName: data.lastName,
      initials: data.initials,
      specialty: data.specialty,
      bio: data?.bio,
      portfolioUrl: data?.portfolioUrl,
    },
  });

  return artist;
};

export const getArtists = async () => {
  const artists = await prisma.artist.findMany();

  if (artists.length === 0) {
    throw new Error("No artists found");
  }
  return artists;
};

export const getArtistById = async (id: number) => {
  const artist = await prisma.artist.findUnique({
    where: { id },
  });
  if (!artist) {
    throw new Error("Artist not found");
  }

  return artist;
};

export const updateArtist = async (data: Artist, id: number) => {
  const artist = await prisma.artist.findUnique({
    where: {
      id,
    },
  });

  if (!artist) {
    throw new Error("Artist not found!");
  }

  return await prisma.artist.update({
    where: { id },
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      initials: data.initials,
      specialty: data.specialty,
      bio: data.bio,
      portfolioUrl: data.portfolioUrl,
    },
  });
};

export const removeAritst = async (id: number) => {
  const artist = await prisma.artist.findUnique({
    where: { id },
  });

  if (!artist) {
    throw new Error("Artist not found");
  }

  return await prisma.artist.delete({
    where: { id },
  });
};
