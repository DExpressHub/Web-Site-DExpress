'use client'
import {
  Button,
  Navbar as HeroUiNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import NextImage from 'next/image'

import { useNavItem } from './useNavItem'

import { useScrollTo } from '@/hooks'
import { ThemeSwitch } from '@/components/molecules'

export function Navbar() {
  const navItems = useNavItem()
  const navigateTo = useScrollTo()

  return (
    <HeroUiNavBar isBlurred isBordered maxWidth="2xl" position="sticky">
      <NavbarContent as="div" className="max-w-fit" justify="start">
        <NavbarBrand>
          <NextImage
            alt="logo"
            height={50}
            src="/logo.png"
            width={146}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex gap-x-4" justify="end">
        {navItems.map((item) => (
          <NavbarItem key={item.href} className="lg:flex hidden">
            <Button
              aria-label={`Ir para secção ${item.name}`}
              className="font-medium"
              variant="light"
              onPress={() => navigateTo(item.id)}
            >
              {item.name}
            </Button>
          </NavbarItem>
        ))}

        {/* <NavbarItem className="hidden md:flex">
          <SigninLink />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <SignupLink />
        </NavbarItem> */}
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem className="md:hidden">
          <MobileDrawer />
        </NavbarItem> */}
      </NavbarContent>
    </HeroUiNavBar>
  )
}
