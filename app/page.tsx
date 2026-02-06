import PortfolioCarousel from '../widgets/portfolio-carousel'
import PortfolioHeader from '../widgets/portfolio-header'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto flex h-screen w-full max-w-none flex-col px-[24px]">
        <PortfolioHeader />
        <PortfolioCarousel />
        <div className="h-[7vh]" />
      </div>
    </main>
  )
}
