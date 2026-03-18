import { jest } from "@jest/globals";
import prismaMock from "../__mocks__/prisma";

import {
  createBooking,
  updateBooking,
  getUserBooking,
  getAllBooking,
} from "../services/booking.services";

// 🔥 Mock Prisma
jest.mock("../config/prisma", () => ({
  __esModule: true,
  default: prismaMock,
}));

describe("Booking Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockData = {
    referenceCode: "REF-123",
    branchId: 1,
    artistId: 1,
    style: "Tribal",
    placement: "Arm",
    size: "SMALL",
    notes: "Test note",
    preferredDate: new Date(),
    preferredTime: "10:00",
    status: "PENDING",
    handledById: 1,
    adminNote: "",
    customerId: 1,
  };

  // ===============================
  // 🔥 CREATE BOOKING
  // ===============================

  it("should create booking successfully", async () => {
    prismaMock.booking.findFirst.mockResolvedValue(null);
    prismaMock.artist.findUnique.mockResolvedValue({ id: 1 });

    prismaMock.booking.create.mockResolvedValue({
      id: 1,
      ...mockData,
    });

    const result = await createBooking(mockData as any);

    expect(result).toHaveProperty("id");
    expect(prismaMock.booking.create).toHaveBeenCalled();
  });

  it("should throw error if slot already booked", async () => {
    prismaMock.booking.findFirst.mockResolvedValue({ id: 1 });

    await expect(createBooking(mockData as any)).rejects.toThrow(
      "This time slot is already booked",
    );
  });

  it("should throw error if artist not found", async () => {
    prismaMock.booking.findFirst.mockResolvedValue(null);
    prismaMock.artist.findUnique.mockResolvedValue(null);

    await expect(createBooking(mockData as any)).rejects.toThrow(
      "Artist not found",
    );
  });

  // ===============================
  // 🔥 UPDATE BOOKING
  // ===============================

  it("should update booking status", async () => {
    prismaMock.booking.update.mockResolvedValue({
      id: 1,
      status: "APPROVED",
    });

    const result = await updateBooking(1, "APPROVED" as any);

    expect(result.status).toBe("APPROVED");
    expect(prismaMock.booking.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { status: "APPROVED" },
    });
  });

  // ===============================
  // 🔥 GET USER BOOKING
  // ===============================

  it("should return user bookings", async () => {
    prismaMock.booking.findFirst.mockResolvedValue({
      id: 1,
      artist: { id: 1 },
      customerId: 1,
    });

    const result = await getUserBooking(1);

    expect(result).toHaveProperty("customerId");
    expect(result.artist).toHaveProperty("id");

    expect(prismaMock.booking.findFirst).toHaveBeenCalledWith({
      where: { customerId: 1 },
      include: { artist: true },
    });
  });

  it("should throw error if no bookings found", async () => {
    prismaMock.booking.findFirst.mockResolvedValue(null);

    await expect(getUserBooking(1)).rejects.toThrow("Book not found");
  });

  // ===============================
  // 🔥 GET ALL BOOKINGS
  // ===============================

  it("should return all bookings", async () => {
    prismaMock.booking.findMany.mockResolvedValue([{ id: 1, style: "Tribal" }]);

    const result = await getAllBooking();

    expect(result.length).toBeGreaterThan(0);
    expect(prismaMock.booking.findMany).toHaveBeenCalled();
  });
});
