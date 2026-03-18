import { Response, Request } from "express";
import * as artistService from "../services/artist.services";

export const createArtist = async (req: Request, res: Response) => {
  try {
    const artist = await artistService.createArtist(req.body);

    res.status(201).json({
      message: "Artist create successfully",
      artist,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllArtist = async (req: Request, res: Response) => {
  try {
    const artists = await artistService.getArtists();

    res.status(200).json({
      artists,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getArtistById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const artist = await artistService.getArtistById(id);

    res.status(200).json({
      artist,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateArtist = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params);
    const data = req.body;

    const artist = await artistService.updateArtist(data, id);

    res.status(200).json({
      message: "Artist update successfully",
      artist,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteArtist = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await artistService.removeAritst(id);

    res.status(200).json({
      message: "Artist delete successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};
