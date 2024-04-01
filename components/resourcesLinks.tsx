import React from 'react';
import Image from 'next/image';
 
export default function ResourcesLinks() {
  return (
    <section className="relative" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container mx-auto mt-12 px-4">
        <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="p-8">
          <button className="container flex justify-center items-center button-yellow mb-8">Additional Resources</button>

            <h2 className="text-2xl font-bold text-white mb-4">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Skin Cancer Foundation */}
              <ResourceCard
                title="Skin Cancer Foundation"
                links={[
                  { text: "Skin Cancer Facts & Statistics", url: "https://www.skincancer.org/skin-cancer-information/skin-cancer-facts/?fbclid=IwAR3r4icfuXoOjTxPX_AaHG8qRosxKMzdmrBMdciB6TmZ1kGisMwLLRyP0OM" },
                  { text: "Facts about skin cancer in people of color", url: "https://www.skincancer.org/skin-cancer-information/skin-cancer-skin-of-color/" }
                ]}
              />
              {/* American Academy of Dermatology */}
              <ResourceCard
                title="American Academy of Dermatology"
                links={[
                  { text: "Skin Cancer Prevention", url: "https://www.aad.org/public/diseases/skin-cancer/prevent/how" },
                  { text: "The Dangers of Indoor tanning", url: "https://www.aad.org/public/diseases/skin-cancer/awareness/dangers-tanning" },
                  { text: "Indoor tanning stats and facts", url: "https://www.aad.org/media/stats-indoor-tanning" },
                  { text: "Skin Cancer stats and facts", url: "https://www.aad.org/media/stats-skin-cancer" }
                ]}
              />
              {/* Melanoma Research Fund (MRF) */}
              <ResourceCard
                title="Melanoma Research Fund (MRF)"
                links={[
                  { text: "Preventing Melanoma", url: "https://melanoma.org/melanoma-education/prevention/young-adult-prevention/" },
                  { text: "MRF’s Educator Course for Healthcare Students", url: "https://learn.melanoma.org/p/HealthcareStudentEducatorCourse" }
                ]}
              />
              {/* Centers for Disease Control */}
              <ResourceCard
                title="Centers for Disease Control"
                links={[
                  { text: "Skin Cancer – Sun Safety", url: "https://www.cdc.gov/cancer/skin/basic_info/sun-safety.htm" }
                ]}
              />
              {/* US Food and Drug Administration */}
              <ResourceCard
                title="US Food and Drug Administration"
                links={[
                  { text: "Indoor Tanning: The risks of ultraviolet radiation", url: "https://www.fda.gov/radiation-emitting-products/radiation-emitting-products-and-procedures/tanning" }
                ]}
              />
              {/* National Council on Skin Cancer Prevention */}
              <ResourceCard
                title="National Council on Skin Cancer Prevention"
                links={[
                  { text: "Webpage: www.skincancerprevention.org", url: "http://www.skincancerprevention.org/" },
                  { text: "Twitter: @skincancerprev",url:"" },
                  { text: "Facebook: @natlcouncilskincancerprevention",url:""},
                  { text: "IG: @skincancerprev",url:""}
                ]}
              />
              {/* Skin Smart Campus */}
              <ResourceCard
                title="Skin Smart Campus"
                links={[
                  { text: "Webpage: www.skinsmartcampus.org", url: "https://skincancerprevention.org/get-involved/skin-smart-campus/" },
                  { text: "Twitter: @skinsmartcampus",url:""},
                  { text: "Facebook: @skinsmartcampus",url:""}
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ResourceCard = ({ title, links }: { title: string; links: { text: string; url: string }[] }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} className="text-blue-700 hover:underline">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
