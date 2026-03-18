import prismaMock from "../__mocks__/prisma";

import {
  createInquiry,
  updateInquiry,
  replyInquiry,
  getAllInquiry,
  getInquiryById,
} from "../services/inquiry.services";

// 🔥 Mock Prisma
jest.mock("../config/prisma", () => ({
  __esModule: true,
  default: prismaMock,
}));

describe("Inquiry Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockData = {
    branchId: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Tattoo Inquiry",
    message: "I want a sleeve tattoo",
  };

  // ===============================
  // 🔥 CREATE INQUIRY
  // ===============================

  it("should create inquiry successfully", async () => {
    prismaMock.inquiry.create.mockResolvedValue({
      id: 1,
      ...mockData,
      status: "UNREAD",
    });

    const result = await createInquiry(mockData as any);

    expect(result).toHaveProperty("id");
    expect(prismaMock.inquiry.create).toHaveBeenCalled();
  });

  // ===============================
  // 🔥 UPDATE INQUIRY
  // ===============================

  it("should update inquiry status", async () => {
    prismaMock.inquiry.findUnique.mockResolvedValue({
      id: 1,
    });

    prismaMock.inquiry.update.mockResolvedValue({
      id: 1,
      status: "READ",
    });

    const result = await updateInquiry(1, "READ" as any);

    expect(result.status).toBe("READ");
    expect(result).toHaveProperty("id");
    expect(prismaMock.inquiry.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { status: "READ" },
    });
  });

  it("should throw error if no inquiry found", async () => {
    prismaMock.inquiry.findUnique.mockResolvedValue(null);

    await expect(updateInquiry(1, "UNREAD" as any)).rejects.toThrow(
      "Inquiry not found",
    );
  });

  // ===============================
  // 🔥 REPLY INQUIRY
  // ===============================

  it("should reply inquiry successful", async () => {
    prismaMock.inquiry.findUnique.mockResolvedValue({
      id: 1,
    });

    prismaMock.inquiryReply.create.mockResolvedValue({
      id: 1,
      inquiryId: 1,
      adminId: 1,
      message: "REPLYYY",
    });

    const result = await replyInquiry({
      inquiryId: 1,
      adminId: 1,
      message: "REPLYYY",
    });

    expect(result).toHaveProperty("id");

    expect(prismaMock.inquiryReply.create).toHaveBeenCalled();
  });

  // ===============================
  // 🔥 GET ALL INQUIRY
  // ===============================
  it("should return all inquiry", async () => {
    prismaMock.inquiry.findMany.mockResolvedValue([
      {
        id: 1,
      },
    ]);

    const result = await getAllInquiry();

    expect(result.length).toBeGreaterThan(0);
    expect(prismaMock.inquiry.findMany).toHaveBeenCalled();
  });
  it("should throw error if no inquiries", async () => {
    prismaMock.inquiry.findMany.mockResolvedValue([]);

    await expect(getAllInquiry()).rejects.toThrow("No inquiry found");
  });

  // ===============================
  // 🔥 GET INQUIRY BY ID
  // ===============================

  it("should return inquiry by id", async () => {
    prismaMock.inquiry.findUnique.mockResolvedValue({
      id: 1,
    });

    const result = await getInquiryById(1);

    expect(result).toHaveProperty("id");
    expect(prismaMock.inquiry.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
  it("should throw error if no inquiry", async () => {
    prismaMock.inquiry.findUnique.mockResolvedValue(null);

    await expect(getInquiryById(1)).rejects.toThrow("Inquiry not found");
  });
});
