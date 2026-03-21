import BirthdaySection from "../components/BirthdaySection";
import MarriageSection from "../components/MarriageSection";
import CorporateSection from "../components/CorporateSection";

export default function Events() {
  return (
    <div className="bg-black text-white">
      <BirthdaySection />
      <MarriageSection />
      <CorporateSection />
    </div>
  );
}