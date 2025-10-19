import React from 'react';
import { X } from 'lucide-react';

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl transform animate-scale-in">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#00393C]">{title}</h3>
          <button
            onClick={onClose}
            className="text-[#303E3F] hover:text-[#F68949] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <p className="text-[#303E3F] leading-relaxed">{content}</p>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-[#F68949] text-white px-6 py-2 rounded-lg hover:bg-[#946F5C] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;