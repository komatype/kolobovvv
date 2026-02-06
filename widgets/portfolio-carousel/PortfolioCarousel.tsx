import Carousel from '../../shared/ui/carousel'
import { projects } from '../../shared/config/portfolio'

export default function PortfolioCarousel() {
  return <Carousel projects={projects} />
}
