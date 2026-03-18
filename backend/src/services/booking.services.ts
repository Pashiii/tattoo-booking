import prisma from "../config/prisma";
import { Booking, BookingStatus, TattooSize } from "../types";

export const createBooking = async (data: Booking) => {
  const bookingDate = new Date(data.preferredDate);

  const existingBooking = await prisma.booking.findFirst({
    where: {
      referenceCode: data.referenceCode,
      branchId: data.branchId,
      artistId: data.artistId,
      preferredDate: bookingDate,
      preferredTime: data.preferredTime,
      status: {
        in: ["PENDING", "APPROVED"],
      },
    },
  });

  if (existingBooking) {
    throw new Error("This time slot is already booked");
  }

  const artist = await prisma.artist.findUnique({
    where: {
      id: data.artistId,
    },
  });

  if (!artist) {
    throw new Error("Artist not found");
  }

  const booking = await prisma.booking.create({
    data: {
      referenceCode: data.referenceCode,
      branchId: data.branchId,
      artistId: data.artistId,
      style: data.style,
      placement: data.placement,
      size: data.size,
      notes: data.notes,
      preferredDate: bookingDate,
      preferredTime: data.preferredTime,
      status: data.status,
      handledById: data.handledById,
      adminNote: data.adminNote,
      customerId: data.customerId,
    },
  });

  return booking;
};

export const updateBooking = async (
  bookingId: number,
  status: BookingStatus,
) => {
  return await prisma.booking.update({
    where: { id: bookingId },
    data: { status },
  });
};

export const getUserBooking = async (userId: number) => {
  const booking = await prisma.booking.findFirst({
    where: {
      customerId: userId,
    },
    include: { artist: true },
  });

  if (!booking) {
    throw new Error("Book not found");
  }

  return booking;
};

export const getAllBooking = async () => {
  return await prisma.booking.findMany({
    select: {
      id: true,
      style: true,
      placement: true,
      size: true,
      notes: true,
      preferredDate: true,
      preferredTime: true,
      status: true,
      adminNote: true,
    },
  });
};
