'use client'

import classess from './index.module.scss'

import React from 'react'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'
import { Button } from '../../Button'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || [];
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classess.hide : ''}>
      <Gutter>
        <ul className={classess.inclusions}>
          {inclusions.map(item => (
            <li key={item.title}>
              <Image
                src={item.icon}
                alt={item.title}
                width={36}
                height={36}
                className={classess.icon}
              />
              <h5 className={classess.title}>{item.title}</h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classess.footer}>
        <Gutter>
          <div className={classess.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="log" width={170} height={50} />
              <p>{footer.copyright.toString()}</p>
              <div className={classess.socialLinks}>
                {navItems.map(item =>{
                  const icon = item?.link?.icon as Media;
                  return(
                    <Button key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={classess.socialLinkItem}
                    >
                      <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classess.socialLinkIcon}
                      />
                    </Button>
                  )
                })}
              </div>
            </Link>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
