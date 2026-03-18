import prismaMock from "../__mocks__/prisma";
import {
  createArtist,
  getArtistById,
  getArtists,
  removeAritst,
  updateArtist,
} from "../services/artist.services";

jest.mock("../config/prisma", () => ({
  __esModule: true,
  default: prismaMock,
}));

describe("Artist Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockData = {
    branchId: 1,
    firstName: "John",
    lastName: "Paul",
    initials: "JP",
    specialty: "Realism",
    bio: "TATOO ARTIST",
    portfolioUrl: "http://portfolio.com",
  };

  // ===============================
  // 🔥 CREATE ARTIST
  // ===============================

  it("should create artist successfully", async () => {
    prismaMock.artist.findFirst.mockResolvedValue(null);

    prismaMock.artist.create.mockResolvedValue({
      id: 1,
      ...mockData,
    });

    const result = await createArtist(mockData as any);

    expect(result).toHaveProperty("id");
    expect(prismaMock.artist.create).toHaveBeenCalled();
  });

  it("should throw error if artist already exists", async () => {
    prismaMock.artist.findFirst.mockResolvedValue({
      firstName: "John",
      lastName: "Paul",
    });

    await expect(createArtist(mockData as any)).rejects.toThrow(
      "Artist already registered!",
    );
    expect(prismaMock.artist.findFirst).toHaveBeenCalledWith({
      where: {
        firstName: mockData.firstName,
        lastName: mockData.lastName,
      },
    });
  });

  // ===============================
  // 🔥 GET ARTISTS BY ID
  // ===============================

  it("should return artist", async () => {
    prismaMock.artist.findUnique.mockResolvedValue({
      id: 1,
    });

    const result = await getArtistById(1);
    expect(result).toHaveProperty("id");
    expect(prismaMock.artist.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
  it("should throw error if no artists found", async () => {
    prismaMock.artist.findUnique.mockResolvedValue(null);

    await expect(getArtistById(1)).rejects.toThrow("Artist not found");
  });

  // ===============================
  // 🔥 GET ALL ARTISTS
  // ===============================

  it("should return all artists", async () => {
    prismaMock.artist.findMany.mockResolvedValue([
      {
        id: 1,
      },
    ]);

    const result = await getArtists();

    expect(result.length).toBeGreaterThan(0);
    expect(prismaMock.artist.findMany).toHaveBeenCalled();
  });
  it("should throw error if no artists", async () => {
    prismaMock.artist.findMany.mockResolvedValue([]);

    await expect(getArtists()).rejects.toThrow("No artists found");
  });

  // ===============================
  // 🔥 UPDATE ARTISTS
  // ===============================
  it("should update artist", async () => {
    prismaMock.artist.findUnique.mockResolvedValue({
      id: 1,
    });

    prismaMock.artist.update.mockResolvedValue({
      id: 1,
      firstName: "Paul",
      lastName: "John",
      initials: "PJ",
      specialty: "Tradition",
      bio: "Tattoo & Piercing",
      portfolioUrl: "http://portfolio.com",
    });

    const newData = {
      id: 1,
      branchId: 1,
      firstName: "Paul",
      lastName: "John",
      initials: "PJ",
      specialty: "Tradition",
      bio: "Tattoo & Piercing",
      portfolioUrl: "http://portfolio.com",
    };

    const result = await updateArtist(newData as any, 1);

    expect(result).toHaveProperty("id");
    expect(prismaMock.artist.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        firstName: "Paul",
        lastName: "John",
        initials: "PJ",
        specialty: "Tradition",
        bio: "Tattoo & Piercing",
        portfolioUrl: "http://portfolio.com",
      },
    });
  });
  it("should throw error if no artist found", async () => {
    prismaMock.artist.findUnique.mockResolvedValue(null);
    const newData = {
      id: 1,
      branchId: 1,
      firstName: "Paul",
      lastName: "John",
      initials: "PJ",
      specialty: "Tradition",
      bio: "Tattoo & Piercing",
      portfolioUrl: "http://portfolio.com",
    };
    await expect(updateArtist(newData, 1)).rejects.toThrow("Artist not found!");
  });

  // ===============================
  // 🔥 REMOVE ARTISTS
  // ===============================
  it("should remove artist", async () => {
    prismaMock.artist.findUnique.mockResolvedValue({ id: 1 });

    prismaMock.artist.delete.mockResolvedValue({
      id: 1,
    });

    const result = await removeAritst(1);

    expect(result).toHaveProperty("id");
    expect(prismaMock.artist.delete).toHaveBeenCalled();
  });
  it("should throw error if no artist found", async () => {
    prismaMock.artist.findUnique.mockResolvedValue(null);

    await expect(removeAritst(1)).rejects.toThrow("Artist not found");
  });
});
