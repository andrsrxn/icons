import type { Icon } from './types'

export const IconBusFront: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-bus-front'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.39 14.53c0-.38 0-.57-.05-.72a1 1 0 0 0-.64-.64c-.15-.05-.34-.05-.72-.05H4.02c-.38 0-.57 0-.72.05a1 1 0 0 0-.64.64c-.05.15-.05.34-.05.72 0 1.13 0 1.7.16 2.15a3 3 0 0 0 1.9 1.91 8 8 0 0 0 2.16.15h10.34c1.13 0 1.7 0 2.15-.15a3 3 0 0 0 1.91-1.91c.16-.46.16-1.02.16-2.15'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.39 5.98a1 1 0 0 1-1 .99H3.6a1 1 0 0 1-.99-1 2.97 2.97 0 0 1 2.97-2.96h12.84a2.97 2.97 0 0 1 2.97 2.97'
        fill='currentColor'
      />
      <path
        d='M13.52 18.74h-3.04c-3.64 0-5.46 0-6.62-1.1l-.15-.14c-1.1-1.16-1.1-2.98-1.1-6.63s0-5.46 1.1-6.62l.15-.15C5.02 3 6.84 3 10.48 3h3.04c3.64 0 5.46 0 6.62 1.1l.15.15c1.1 1.16 1.1 2.98 1.1 6.62s0 5.47-1.1 6.63l-.15.14c-1.16 1.1-2.98 1.1-6.62 1.1'
        stroke='currentColor'
      />
      <path
        d='M5.12 18.74v.42c0 .57 0 .86.07 1.1.15.44.5.79.95.94.23.07.52.07 1.1.07.57 0 .86 0 1.09-.07.45-.15.8-.5.95-.95.07-.23.07-.52.07-1.1v-.4'
        stroke='currentColor'
      />
      <path
        d='M14.65 18.74v.42c0 .57 0 .86.07 1.1.15.44.5.79.95.94.23.07.52.07 1.1.07.57 0 .86 0 1.1-.07.44-.15.79-.5.94-.95.07-.23.07-.52.07-1.1v-.4'
        stroke='currentColor'
      />
      <path d='M2.81 13.12h18.25' stroke='currentColor' />
      <path d='M2.81 6.97h18.25' stroke='currentColor' />
      <path d='M5.49 15.81h3.49' stroke='currentColor' />
      <path d='M15.02 15.81h3.49' stroke='currentColor' />
    </svg>
  )
}
