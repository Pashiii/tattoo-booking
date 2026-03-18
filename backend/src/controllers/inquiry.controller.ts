import { Request, Response } from "express";
import * as inquiryService from "../services/inquiry.services";

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const inquiry = await inquiryService.createInquiry(req.body);

    res.status(201).json({
      message: "Inquiry successfully",
      inquiry,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getInquiryById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const inquiry = await inquiryService.getInquiryById(id);

    res.status(200).json(inquiry);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllInquiry = async (req: Request, res: Response) => {
  try {
    const inquiry = await inquiryService.getAllInquiry();

    res.status(200).json(inquiry);
  } catch (error: any) {
    console.log(error);
  }
};

export const updateInquiry = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const id = Number(req.params);
    const inquiry = await inquiryService.updateInquiry(id, status);

    res.status(201).json({
      message: "Update successfully",
      inquiry,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const replyInquiry = async (req: Request, res: Response) => {
  try {
    const { inquiryId, adminId, message } = req.body;
    const data = { inquiryId, adminId, message };
    const inquiryReply = await inquiryService.replyInquiry(data);

    res.status(201).json({
      message: "Reply Inquiry successfully",
      inquiryReply,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};
