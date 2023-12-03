import Features from '@/components/pages/home/Features';
import Heading from '@/components/pages/home/Heading';
import Statistics from '@/components/pages/home/Statistics';
import ValueProp from '@/components/pages/home/ValueProp';

export default function Home() {
  return <>
    <ValueProp />
    <Heading />
    <Features />
    <Statistics />
  </>
}