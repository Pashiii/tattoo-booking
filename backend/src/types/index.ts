export enum UserRole {
  CUSTOMER = "CUSTOMER",
  SUPER_ADMIN = "SUPER_ADMIN",
  BRANCH_ADMIN = "BRANCH_ADMIN",
}

export enum TattooSize {
  TINY = "TINY",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum BookingStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum InquiryStatus {
  UNREAD = "UNREAD",
  READ = "READ",
  REPLIED = "REPLIED",
  ARCHIVED = "ARCHIVED",
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
  isVerified: boolean;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

  userSessions: UserSessions[];
  customer?: Customer;
  admin?: Admin;
}

export interface UserSessions {}

export interface Booking {
  id: number;
  referenceCode: string;
  branchId: number;
  artistId: number;
  style: string;
  placement: string;
  size: TattooSize;
  notes?: string;
  preferredDate: Date;
  preferredTime: string;
  status: BookingStatus;
  handledById: number;
  adminNote?: string;
  customerId: number;
}

export interface Inquiry {
  id: number;
  branchId: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: InquiryStatus;
  replies: InquiryReply;
}

export interface InquiryReply {
  id?: number;
  inquiryId: number;
  adminId: number;
  message: string;
}

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  bookings: Booking[];
  userId: number;
}

export interface Admin {
  id: number;
  name: string;
  branchId: number;
  userId: number;
  handledBookings: Booking[];
  repliedInquiries: InquiryReply[];
}

export interface Artist {
  id?: number;
  branchId: number;
  firstName: string;
  lastName: string;
  initials: string;
  specialty: string;
  bio: string;
  portfolioUrl: string;
  isAvailable?: boolean;
  bookings?: Booking[];
}

export interface Branch {
  id: number;
  code: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  hours: string;
  defaultDailyLimit: number;
  isActive: boolean;
  admins: Admin[];
  artists: Artist[];
  bookings: Booking[];
  inquiries: Inquiry[];
}
