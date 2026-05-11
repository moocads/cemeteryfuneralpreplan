import Nav from '@/components/Nav'
import IndexSlider from '@/components/IndexSlider'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import HomePage from '@/components/HomePage'

export default function Page() {
  return (
    <>
      <Nav />
      <IndexSlider />
      <HomePage />
      <BackToTop />
      <Footer />
    </>
  )
}
