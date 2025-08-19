import { createContext, useContext } from "react";
import type { Artist } from "../types/types";

type ArtistContextType = {
  data: Artist[];
  setData: React.Dispatch<React.SetStateAction<Artist[]>>;
};

export const ArtistContext = createContext<ArtistContextType | undefined>(
  undefined
);

export const useArtist = () => {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error("useArtist must be used within an ArtistProvider");
  }
  return context;
};
