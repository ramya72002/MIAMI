export const metadata = {
  title: 'MIAMI: Skin Smart Campus Initiative',
  description: 'shines a light on skin cancer prevention, fostering a safer, healthier campus environment for all.',
}

import Hero from '@/components/hero'
import CancerFacts from '@/components/cancerFacts'
import CancerPrevention from '@/components/cancerPrevention'
import UvIndex from '@/components/uvIndex'
import EarlyDetection from '@/components/earlyDetection'
import ResourcesLinks from '@/components/resourcesLinks'
export default function Home() {
  return (
    <>
      <Hero />
      <CancerFacts/>
      <CancerPrevention/>
      <UvIndex/>
      <EarlyDetection/>
      <ResourcesLinks/>
    </>
  )
}
