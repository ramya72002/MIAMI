import A from '@/public/images/A.jpeg'
import B from '@/public/images/B.jpeg'
import C from '@/public/images/C.jpeg'
import D from '@/public/images/D.jpeg'
import E from '@/public/images/E.jpeg'
import Image from 'next/image'

export default function EarlyDetection() {
  return (
    <section className="relative" style={{ backgroundColor: "#04487f" }}>
      <div className="container mx-auto mt-12 px-4 flex flex-wrap items-center">
        <button className="container flex justify-center items-center button-yellow mb-8">Early Detection</button>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-white text-3xl font-bold mb-4">Melanoma: Early Detection</h2>
          <p className="text-white text-lg mb-6">
            Melanoma, the deadliest form of skin cancer, can be effectively treated if detected early. It is crucial to become familiar with your skin and conduct monthly self-skin examinations. Seeking assistance from a partner or friend to inspect hard-to-reach areas such as the back and scalp enhances the thoroughness of these examinations. Promptly notify your healthcare provider upon observing any potential warning signs to ensure prompt medical intervention.
          </p>
          <div className="self-examination mt-6">
  <p className="text-white text-lg mb-6">
    View <a href="https://www.cancer.org/cancer/risk-prevention/sun-and-uv/skin-exams.html" className="text-yellow-500 font-bold">American Cancer Society’s guide</a> or the <a href="https://www.aad.org/public/diseases/skin-cancer/find/check-skin" className="text-yellow-500 font-bold">American Academy of Dermatology Association’s guide</a> to doing self-skin examinations.
  </p>
</div>

          <div className="border border-white rounded-lg p-4 mb-6">
            <h3 className="text-white text-2xl font-bold mb-4">ABCDE’s of Melanoma</h3>
            <ul className="list-disc list-inside">
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">A (Asymmetry):</span> Irregularly shaped where one half does not match the other half
              </li>
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">B (Border):</span> Uneven or irregular borders (scalloped or notched borders)
              </li>
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">C (Color):</span> Variation in color within the mole (shades of brown, black, red, blue, or white may be present)
              </li>
              <li className="text-white mb-4">
                <span className="text-yellow-300 font-bold">D (Diameter):</span> Larger than 6 mm (the size of a pencil eraser)
              </li>
              <li className="text-white">
                <span className="text-yellow-300 font-bold">E (Evolution):</span> Changes in size, shape, color, and/or elevation over time. Development of symptoms like itching or bleeding
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="border border-white rounded-lg p-4 mb-6">
            <h3 className="text-white text-2xl font-bold mb-4">Explanation of ABCDE</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Image src={A} alt="A" className="w-full h-auto rounded-lg" />
                <p className="text-white mt-2"><span className="text-yellow-300 font-bold">A is for Asymmetry:</span> One half of the spot is unlike the other half.</p>
              </div>
              <div className="col-span-1">
                <Image src={B} alt="B" className="w-full h-auto rounded-lg" />
                <p className="text-white mt-2"><span className="text-yellow-300 font-bold">B is for Border:</span> The spot has an irregular, scalloped, or poorly defined border.</p>
              </div>
              <div className="col-span-1">
                <Image src={C} alt="C" className="w-full h-auto rounded-lg" />
                <p className="text-white mt-2"><span className="text-yellow-300 font-bold">C is for Color:</span> The spot has varying colors from one area to the next, such as shades of tan, brown or black, or areas of white, red, or blue.</p>
              </div>
              <div className="col-span-1">
                <Image src={D} alt="D" className="w-full h-auto rounded-lg" />
                <p className="text-white mt-2"><span className="text-yellow-300 font-bold">D is for Diameter:</span> While melanomas are usually greater than 6 millimeters, or about the size of a pencil eraser, when diagnosed, they can be smaller.</p>
              </div>
              <div className="col-span-1">
                <Image src={E} alt="E" className="w-full h-auto rounded-lg" />
                <p className="text-white mt-2"><span className="text-yellow-300 font-bold">E is for Evolving:</span> The spot looks different from the rest or is changing in size, shape, or color.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
