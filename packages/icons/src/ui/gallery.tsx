import type { Icon } from './types'

export const IconGallery: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-gallery'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.68 17.07c1.23-3.61 1.85-5.42.95-6.67-.9-1.26-2.81-1.26-6.63-1.26H8.12c-3.46 0-5.2 0-6.1 1.13s-.51 2.81.24 6.19l.04.17c.5 2.25.76 3.37 1.58 4.03s1.97.66 4.28.66h6.78c2.08 0 3.11 0 3.9-.57.78-.56 1.12-1.54 1.78-3.5z'
        fill='currentColor'
      />
      <path
        d='M21.06 16.87c1.06-3.54 1.6-5.3.7-6.52-.9-1.2-2.75-1.2-6.45-1.2H7.97c-3.4 0-5.1 0-6 1.1s-.56 2.76.12 6.1l.04.17c.47 2.3.7 3.44 1.53 4.12s2 .68 4.35.68h7.25c2.15 0 3.23 0 4.02-.6.8-.6 1.1-1.62 1.73-3.68z'
        stroke='currentColor'
      />
      <path d='M18.8 2.68H5.2' stroke='currentColor' />
      <path d='M20.7 5.91H3.3' stroke='currentColor' />
    </svg>
  )
}
