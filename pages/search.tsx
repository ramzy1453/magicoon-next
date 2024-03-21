import IconTypeSelect from "@/components/Search/IconTypeSelect";
import IconsList from "@/sections/Search/IconsList";
import Hero from "@/sections/Search/Hero";

export default function SearchPage() {
  return (
    <div>
      <div
        id="hero"
        className="pt-20 pb-6 bg-gradient-to-r from-[#7360DF] to-[#C499F3] shadow"
      >
        <Hero />
      </div>
      <div className="px-6 py-4 p-0 bg-primary-content sticky top-0 md:top-24">
        <IconTypeSelect />
      </div>
      <div className="pt-12 pb-20 bg-[#E0E8F3]">
        <IconsList />
      </div>
    </div>
  );
}
