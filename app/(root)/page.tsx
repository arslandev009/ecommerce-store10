import Collections from '@/components/Collections'
import ProductList from '@/components/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={3000}
        className=" w-screen"
      />
      <Collections />
      <ProductList />
    </>
  )
}
