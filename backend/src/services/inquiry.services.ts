import prisma from "../config/prisma";
import { Inquiry, InquiryReply, InquiryStatus } from "../types";

export const createInquiry = async (data: Inquiry) => {
  if (!data.name || !data.email || !data.message) {
    throw new Error("All fields are required");
  }

  const inquiry = await prisma.inquiry.create({
    data: {
      branchId: data.branchId,
      name: data.name,
      email: data.email,
      subject: data.subject || "",
      message: data.message,
      status: data.status || "UNREAD",
    },
  });
  return inquiry;
};

export const updateInquiry = async (
  inquiryId: number,
  status: InquiryStatus,
) => {
  const inquiry = await prisma.inquiry.findUnique({
    where: {
      id: inquiryId,
    },
  });

  if (!inquiry) {
    throw new Error("Inquiry not found");
  }

  return await prisma.inquiry.update({
    where: { id: inquiryId },
    data: { status },
  });
};

export const getInquiryById = async (id: number) => {
  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
  });

  if (!inquiry) {
    throw new Error("Inquiry not found");
  }

  return inquiry;
};

export const getAllInquiry = async () => {
  const inquiry = await prisma.inquiry.findMany();

  if (inquiry.length === 0) {
    throw new Error("No inquiry found");
  }

  return inquiry;
};

export const replyInquiry = async (data: InquiryReply) => {
  const inquiry = await prisma.inquiry.findUnique({
    where: {
      id: data.inquiryId,
    },
  });
  if (!inquiry) {
    throw new Error("Inquiry not found");
  }

  const reply = await prisma.inquiryReply.create({
    data: {
      inquiryId: data.inquiryId,
      adminId: data.adminId,
      message: data.message,
    },
  });

  return reply;
};
