'use client'
import { useRouter } from 'next/navigation'
import { forwardRef, ReactNode, HTMLAttributes } from 'react'

// Define interface for component props
interface ScrollLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  function ScrollLink({ href, children, ...props }, ref) { 
    const router = useRouter()
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const id = href.replace('#', '')
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(href)
      }
    }

    return (
      <a
        ref={ref}
        href={href}
        onClick={handleClick}
        {...props}
        className={`cursor-pointer ${props.className || ''}`}
      >
        {children}
      </a>
    )
  }
)

