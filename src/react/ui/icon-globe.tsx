import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjQyNSAxMmE4LjQyNSA4LjQyNSAwIDEgMS0xNi44NSAwIDguNDI1IDguNDI1IDAgMCAxIDE2Ljg1IDBaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuNDI1IDEyQTguNDI1IDguNDI1IDAgMCAxIDEyIDIwLjQyNU0yMC40MjUgMTJBOC40MjYgOC40MjYgMCAwIDAgMTIgMy41NzRNMjAuNDI1IDEySDMuNTc1TTEyIDIwLjQyNUE4LjQyNiA4LjQyNiAwIDAgMSAzLjU3NCAxMk0xMiAyMC40MjVjMS43OCAwIDMuMjIyLTMuNzcyIDMuMjIyLTguNDI1IDAtNC42NTMtMS40NDMtOC40MjYtMy4yMjItOC40MjZtMCAxNi44NTFjLTEuNzggMC0zLjIyMi0zLjc3Mi0zLjIyMi04LjQyNSAwLTQuNjUzIDEuNDQzLTguNDI2IDMuMjIyLTguNDI2TTMuNTc0IDEyQTguNDI2IDguNDI2IDAgMCAxIDEyIDMuNTc0Ii8+PC9zdmc+)
 */
export const IconGlobe: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-globe'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.425 12a8.425 8.425 0 1 1-16.85 0 8.425 8.425 0 0 1 16.85 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.425 12A8.425 8.425 0 0 1 12 20.425M20.425 12A8.426 8.426 0 0 0 12 3.574M20.425 12H3.575M12 20.425A8.426 8.426 0 0 1 3.574 12M12 20.425c1.78 0 3.222-3.772 3.222-8.425 0-4.653-1.443-8.426-3.222-8.426m0 16.851c-1.78 0-3.222-3.772-3.222-8.425 0-4.653 1.443-8.426 3.222-8.426M3.574 12A8.426 8.426 0 0 1 12 3.574'
      />
    </svg>
  )
}
