import { Guides } from '@/components/Guides'
import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'
import { Button } from '@/components/Button'
export const description =
  'Learn everything there is to know about the Protocol API and integrate Protocol into your product.'

export const sections = [
  { title: 'Guides', id: 'guides' },
  { title: 'Resources', id: 'resources' },
]
export default function Home() {
  return <>
    <HeroPattern />
    <div className="not-prose mb-16 mt-6 flex gap-3">
      <Button href="/quickstart" arrow="right" children="Quickstart" />
      <Button href="/sdks" variant="outline" children="Explore SDKs" />
    </div>
    <div className="not-prose">
      <Button
        href="/sdks"
        variant="text"
        arrow="right"
        children="Get your API key"
      />
    </div>
    <Guides />
    <Resources />
  </>
}