import SliderHero from '../components/Layout/components/SliderHero/SliderHero'
import CTAVantagens from '../components/CTAVantagens/CTAVantagens'
import DescripcaoCTAVantagem from '../components/DescripcaoCTAVantagem/DescripcaoCTAVantagem'
import GraduacaoDistanciaCruzeiroSulVirtual from '../components/GraduacaoDistanciaCruzeiroSulVirtual/GraduacaoDistanciaCruzeiroSulVirtual'
import OQueEstudarBlocksSection from '../components/OQueEstudarBlocksSection/OQueEstudarBlocksSection'
import RelatedProductsSection from '../components/RelatedProductsSection/RelatedProductsSection'
import FormacaoR2 from '../components/FormacaoR2/FormacaoR2'
import CTASection from '../components/CTASection/CTASection'
import CTA from '../components/CTA/CTA'

export default function Home() {
  return (
    <>
      <main>
        <SliderHero/>
        <CTAVantagens/>
        <DescripcaoCTAVantagem/>
        <GraduacaoDistanciaCruzeiroSulVirtual/>
        <OQueEstudarBlocksSection/>
        <RelatedProductsSection/>
        <FormacaoR2/>
        <CTASection/>
        <CTA/>
      </main>
      
    </>
  );
}

