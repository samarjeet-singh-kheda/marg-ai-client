import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "fr", label: "French" },
  { code: "gu", label: "Gujarati" },
  { code: "mr", label: "Marathi" },
  { code: "ur", label: "Urdu" },
  { code: "ta", label: "Tamil" },
];

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full border-none bg-[#FFF] p-2 text-white shadow-sm hover:bg-gray-50">
          <Globe size={24} style={{ color: "#4D44B5" }} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuRadioGroup
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
        >
          {languages.map((language) => (
            <DropdownMenuRadioItem
              key={language.code}
              className="cursor-pointer text-[#303972]"
              value={language.code}
            >
              {language.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
