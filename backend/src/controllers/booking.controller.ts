import { Request, Response } from "express";
import * as bookingService from "../services/booking.services";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await bookingService.createBooking(req.body);

    res.status(201).json({
      message: "Booked successfully",
      booking,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const id = Number(req.params.id);
    const booking = await bookingService.updateBooking(id, status);

    res.status(200).json({
      message: "Update successfully",
      booking,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getUserBooking = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);

    const booking = await bookingService.getUserBooking(userId);

    res.status(200).json({
      booking,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllBooking = async (req: Request, res: Response) => {
  try {
    const booking = await bookingService.getAllBooking();

    res.status(200).json({
      booking,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};
