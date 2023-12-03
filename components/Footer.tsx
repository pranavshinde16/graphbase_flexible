import Image from 'next/image'
import Link from "next/link";
import { footerLinks } from '@/constants'

const Footer = () => {
  type ColumnProps = {
    title: string;
    links: Array<string>;
  }
  const FooterColumn = ({ title, links }: ColumnProps) => {
    return (
      <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
          {links.map((link) => {
            return (<Link href="/" key={link}>{link}</Link>)
          })}
        </ul>
      </div>
    )
  }
  return (
    <footer className='flex-start footer'>
      {/* Column-1 */}
      <div className='flex flex-col gap-12 w-full'>
        <div className="flex items-start flex-col">
          <Image
            src=" /logo-purple.svg"
            width={115}
            height={68}
            alt='FLexible'
          />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Flexible is the world's leading community for creatives to share, grow and get hired.
          </p>
        </div>
        {/* Column-2 */}
        <div className='flex flex-wrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
          </div>

          <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
          </div>

          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
        </div>
        {/* Column-3 */}
        <div className='flexBetween footer_copyright'>
          <p>@2023 Flexible - Pranav Shinde. All rights reserved</p>
          <p className='text-gray'><span className='text-black font-semibold'>10,231</span> projects sold</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer