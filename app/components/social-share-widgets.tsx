'use client';

import React, {useState} from 'react';
import {Check, Link2, Mail, Share2} from 'lucide-react';
import {FaXTwitter, FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";

const SocialShareWidget = ({ url = 'https://www.bizstock.net', title = 'Check out this awesome content!' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareButtons = [
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-5 h-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'X',
      icon: <FaXTwitter className="w-5 h-5" />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'bg-black/90 hover:bg-back/70'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      color: 'bg-green-500 hover:bg-green-600'
    },
    // {
    //   name: 'Pinterest',
    //   icon: <BookMarked className="w-5 h-5" />,
    //   href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    //   color: 'bg-red-600 hover:bg-red-700'
    // },
    // {
    //   name: 'Reddit',
    //   icon: <Share2 className="w-5 h-5" />,
    //   href: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    //   color: 'bg-orange-600 hover:bg-orange-700'
    // },
    {
      name: 'Telegram',
      icon: <FaTelegram className="w-5 h-5" />,
      href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this link: ' + url)}`,
      color: 'bg-gray-600 hover:bg-gray-700'
    }
  ];
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Main share button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-full bg-indigo-600 text-white shadow-lg transform transition-transform duration-200 ${
            isOpen ? 'rotate-45' : 'hover:scale-110'
          }`}
        >
          <Share2 className="w-6 h-6" />
        </button>

        {/* Share buttons container */}
        <div
          className={`absolute bottom-full right-0 mb-4 transform transition-all duration-300 ${
            isOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-3">
            {shareButtons.map((button, index) => (
              <a
                key={button.name}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full text-white shadow-lg transform transition-all duration-200 ${
                  button.color
                } hover:scale-110`}

              >
                {button.icon}
                <span className="sr-only">{`Share on ${button.name}`}</span>
              </a>
            ))}

            {/* Copy link button */}
            <button
              onClick={copyToClipboard}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-800 text-white shadow-lg transform transition-all hover:scale-110"
            >
              {copied ? (
                <span className="text-sm font-medium"><Check className="w-5 h-5" /></span>
              ) : (
                <Link2 className="w-5 h-5" />
              )}
              <span className="sr-only">Copy link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShareWidget;