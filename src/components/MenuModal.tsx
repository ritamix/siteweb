import { useEffect, useState } from "react";
import { X } from "lucide-react";
import client from "../Lib/sanityClient";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the menu PDF from Sanity
    client
      .fetch(`*[_type == "menu"][0]{menuFile}`)
      .then(async (data) => {
        if (data && data.menuFile?.asset?._ref) {
          // Récupérer l'URL complète de l'asset en résolvant la référence
          const assetId = data.menuFile.asset._ref;
          const assetUrl = `https://cdn.sanity.io/files/${
            client.config().projectId
          }/${client.config().dataset}/${assetId.split("-")[1]}.${
            assetId.split("-")[2]
          }`;
          setPdfUrl(assetUrl);
        }
      })
      .catch(console.error);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] m-4 bg-white rounded-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        {pdfUrl ? (
          <iframe src={pdfUrl} className="w-full h-full" allow="autoplay" />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-gray-700">Chargement du menu...</p>
          </div>
        )}
      </div>
    </div>
  );
}
