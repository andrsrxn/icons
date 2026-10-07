import type { Icon } from './types'

export const IconCakeSlice: Icon = ({
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
      data-slot='icon-ui-cake-slice'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.23 12.28.97 3.25c.62 2.06.93 3.09 1.73 3.68s1.87.6 4.02.6h7.3c2.48 0 3.73 0 4.56-.7a3 3 0 0 0 .39-.38c.7-.84.7-2.08.7-4.57 0-.83 0-1.25-.24-1.52l-.13-.13c-.28-.23-.7-.23-1.52-.23H17c-.63 0-.95 0-1.2.16-.24.16-.37.45-.63 1.02l-.32.73-.16.33a1 1 0 0 1-.66.43l-.37.01c-.23 0-.34 0-.44-.02a1 1 0 0 1-.72-.59c-.04-.1-.06-.2-.1-.43l-.07-.3c-.1-.51-.15-.77-.3-.96a1 1 0 0 0-.34-.28c-.21-.1-.47-.1-1-.1z'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='12.05'
        cy='6.97'
        r='1.82'
        transform='rotate(90 12.05 6.97)'
        fill='currentColor'
      />
      <circle
        cx='11.82'
        cy='6.97'
        r='2.09'
        transform='rotate(90 11.82 6.97)'
        stroke='currentColor'
      />
      <path
        d='M9.7 7.58s-3.56 1.1-6.26 2.08c-1.55.57-1.76 1.37-1.67 1.94.04.22.06.33.3.52.22.2.42.19.8.18l7.98-.2c.47-.01.7-.02.84.1.14.11.2.37.3.89.15.81.54 1.8 1.5 1.74 1.1-.08 1.62-.9 1.88-1.59.18-.49.27-.73.4-.82.14-.1.35-.08.77-.07l3.63.13.2.01a2 2 0 0 0 1.98-1.92v-.29a2 2 0 0 0-.7-1.48L19.2 6.67c-.81-.72-1.22-1.08-1.73-1.19-.5-.1-1.02.05-2.06.36l-1.59.48'
        stroke='currentColor'
      />
      <path
        d='m2.38 12.43.58 2.66c.5 2.25.75 3.38 1.57 4.04s1.98.67 4.3.67h6.5c2.82 0 4.24 0 5.11-.88s.88-2.3.88-5.12v-1.16'
        stroke='currentColor'
      />
      <path d='M3.16 15.61h6.38' stroke='currentColor' />
      <path d='M17.37 15.61h3.67' stroke='currentColor' />
      <path d='M11.87 4.87c-.02-.47.11-1.14.54-1.94' stroke='currentColor' />
    </svg>
  )
}
