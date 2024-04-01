
'use client'
import { useState, useEffect } from 'react';

export default function CancerFacts() {
  const [isAnimated, setIsAnimated] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.querySelector('.section1');
      const section2 = document.querySelector('.section2');
      const section3 = document.querySelector('.section3');
      const section4 = document.querySelector('.section4');
      const section5 = document.querySelector('.section5');

      if (section1 && isElementInViewport(section1) && !isAnimated.section1) {
        setIsAnimated((prevState) => ({ ...prevState, section1: true }));
      }
      if (section2 && isElementInViewport(section2) && !isAnimated.section2) {
        setIsAnimated((prevState) => ({ ...prevState, section2: true }));
      }
      if (section3 && isElementInViewport(section3) && !isAnimated.section3) {
        setIsAnimated((prevState) => ({ ...prevState, section3: true }));
      }
      if (section4 && isElementInViewport(section4) && !isAnimated.section4) {
        setIsAnimated((prevState) => ({ ...prevState, section4: true }));
      }
      if (section5 && isElementInViewport(section5) && !isAnimated.section5) {
        setIsAnimated((prevState) => ({ ...prevState, section5: true }));
      }
    };

    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  return (
    <section>
      <div className="container mx-auto mt-12 px-0 flex flex-wrap items-center justify-center" style={{ backgroundColor: "#04487f" }}>
        <button className="container flex justify-center items-center button-yellow mb-8">Skin Cancer Facts</button>
        <div className="w-full lg:w-11/12 xl:w-100 px-4">
          <div className={`border border-white rounded-lg mb-8 p-4 ${isAnimated.section1 ? 'animate-rightLeft' : ''} section1`}>
          <h2 className="text-2xl text-yellow-300 font-bold">Skin cancer is the most common cancer diagnosed in the United States</h2>
            <p className="text-white mb-4">Basal cell carcinomas (BCC) and squamous cell carcinomas (SCC), the most prevalent skin cancers, are generally curable.</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>BCCs and SCCs account for approximately 80% and 20% of diagnosed skin cancers, respectively.</li>
              <li>Treatment for these cancers often involves surgical removal, cryotherapy, or radiation therapy, depending on the extent and location of the lesion.</li>
              <li>Despite their high cure rates, advanced cases can result in invasive treatments and potential disfigurement, underscoring the importance of early detection and preventive measures.</li>
            </ul>
          </div>
          <div className={`border border-white rounded-lg mb-8 p-4 ${isAnimated.section2 ? 'animate-slideLeft' : ''} section2`}>
          <h2 className="text-2xl text-yellow-300 font-bold">Melanoma, the third most common skin cancer in the United States</h2>
            <p className="text-white mb-4">Melanoma arises from the melanocytes, or pigment-producing cells, and has the potential to metastasize to other organs, making early detection and intervention crucial for prognosis.</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Treatment for melanoma typically involves surgical excision, with additional therapies such as immunotherapy, targeted therapy, and chemotherapy considered for advanced cases.</li>
              <li>The mortality rate for melanoma is significantly higher than other skin cancers due to its propensity for metastasis. Thus, routine skin screenings and daily sun protection practices are important.</li>
              <li>When detected early, melanoma has a 5-year survival rate of 99%.</li>
            </ul>
            </div>
          <div className={`border border-white rounded-lg mb-8 p-4 ${isAnimated.section3 ? 'animate-rightLeft' : ''} section3`}>
          <h2 className="text-2xl text-yellow-300 font-bold">Exposure to ultraviolet (UV) radiation</h2>
            <p className="text-white mb-4">UV radiation from sunlight is the primary environmental risk factor for skin cancer, contributing to DNA damage and cellular mutations.</p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Tanning devices, including tanning beds and sunlamps, emit artificial UV radiation that can accelerate skin aging and heighten the risk of skin cancer.</li>
              <li>Practicing sun safety measures such as wearing protective clothing, applying broad-spectrum sunscreen, seeking shade during peak UV hours, and avoiding indoor tanning can mitigate UV-related skin damage and reduce the risk of skin cancer in the long-term.</li>
            </ul>
          </div>
          <div className={`border border-white rounded-lg mb-8 p-4 ${isAnimated.section4 ? 'animate-slideLeft' : ''} section4`}>
          <h2 className="text-2xl text-yellow-300 font-bold">General risk factors</h2>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Skin that is lightly complected, burns, freckles, or becomes red upon sun exposure easily is often associated with a higher risk of skin cancer.</li>
              <li>Presence of many moles.</li>
              <li>Personal or family history of skin cancer.</li>
              <li>History of sun exposure and sunburns, particularly during early life.</li>
              <li>Engagement in indoor tanning.</li>
            </ul>
          </div>
          <div className={`border border-white rounded-lg mb-8 p-4 ${isAnimated.section5 ? 'animate-rightLeft' : ''} section5`}>
          <h2 className="text-2xl text-yellow-300 font-bold">Skin cancer in skin of color patients</h2>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Skin cancer can affect individuals of all skin tones, including those with darker skin who rarely sunburn.</li>
              <li>Melanoma in people of color tends to manifest in unique locations on the body, such as the palms of the hands, soles of the feet, under the nails, and in other nail areas.</li>
              <li>These atypical locations often delay detection and diagnosis, leading to more advanced disease stages upon presentation. This poses challenges for treatment and potentially decreases survival rates.</li>
              <li>Dermatologists should be vigilant in conducting thorough skin examinations, considering these less typical sites for melanoma development in people of color.</li>
              <li>UV radiation exposure poses risks to individuals of all skin tones, contributing to skin damage, premature aging, and hyperpigmentation. Therefore, protection against UV radiation is essential for maintaining skin health and reducing the risk of skin cancer, regardless of skin tone.</li>
              <li>Educating communities about the importance of sun protection and skin cancer awareness can help mitigate disparities in skin cancer outcomes among people of color.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
