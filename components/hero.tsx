import FeBg from '@/public/images/about11.jpg'
import home2 from '@/public/images/home2.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative" >
      <div style={{ position: 'relative' }}>
    <Image className="md:max-w-none mx-auto rounded w-full" src={FeBg} alt="Febg" style={{ height: '70vh' }} />
        <div style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
           <h2 className="text-3xl font-semibold mb-4 animate-slideTopDown">UMKC's Skin Smart Campus Initiative</h2>
          <p className="text-lg animate-slideBottomUp"> shines a light on skin cancer prevention, fostering a safer, healthier campus environment for all.</p>
         </div>
  </div>
  <div className="container mx-auto mt-12 px-4 flex flex-wrap items-center" style={{backgroundColor:"#f6f6f6"}}>
    <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-600 to-blue-400" style={{ backgroundColor: "#f6f6f6" }}>

  <button className="container flex justify-center items-center button-yellow mb-8">About Skin Smart Campus Initiative</button>
    <p className="animate-slideLeft text-lg mb-6">
      The University of Missouri-Kansas City aims to earn recognition as a Skin Smart Campus by The National Council on Skin Cancer Prevention through our commitment to fostering a safe and healthy learning and living environment both on- and off-campus. As part of this initiative, we have taken a pledge to prohibit indoor tanning devices in all university-affiliated buildings, while actively promoting skin cancer prevention policies and educational efforts.
    </p>

    <p className="animate-slideLeft text-lg mb-6">
      This endeavor aligns with the Indoor Tan-Free Skin Smart Campus Initiative, which is supported by the National Council on Skin Cancer Prevention in response to the 2014 U.S. Surgeon General’s Call to Action to Prevent Skin Cancer. The Surgeon General's report recognized the significant correlation between indoor tanning use and increased skin cancer risk, emphasizing the avoidable nature of UV radiation exposure from such practices. By implementing interventions aimed at reducing skin cancer and associated fatalities, we strive to address this pressing public health concern.
    </p>

    <p className="animate-slideLeft text-lg mb-6">
      The current literature highlights the prevalence of various cutaneous malignancies in the United States, with melanoma emerging as one of the most frequently diagnosed cancers among young adults. According to findings from The International Agency for Research on Cancer Working Group, tanning beds emit 2-10x more UVA radiation than natural sunlight on average. Additionally, individuals who utilize indoor tanning facilities before the age of 35 years have a 75% increase in the risk of developing melanoma. These statistics emphasize the importance of our commitment to promoting skin cancer prevention measures and cultivating a culture of wellness within our community.
    </p>
  </div>
</div>
{/* <div className="w-full md:w-1/2">
  <Image src={home2} alt="Febg"  className='animate-rightLeft' />
</div> */}

    </section>
  )
}