import type { Icon } from './types'

export const IconHeel: Icon = ({
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
      strokeWidth={strokeWidth}
      data-slot='icon-ui-heel'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.25 15.15v3.42c0 .48 0 .71.14.86.15.14.39.14.86.14h1.1c.47 0 .7 0 .85-.14s.15-.38.15-.86v-4.11c0-.59 0-.88.27-1.02.28-.14.48.01.87.3 2.02 1.56 3.25 5.3 4.91 5.57 1.47.23 6.36.26 8.72.27.6 0 .9 0 1.04-.3.13-.29-.03-.47-.35-.84-.88-1.02-2.59-1.59-5.16-2.13-2.84-.6-4.78-3.54-6.85-6-2.31-2.74-3.28-3.95-4.47-5.14-.39-.38-.58-.57-.9-.61-.34-.05-.53.05-.9.26C1.52 5.92 1.17 8.4 2 10.49c.8 2 1.22 3.82 1.24 4.66'
        fill='currentColor'
      />
      <path
        d='M3.25 18.57v-3.11c0-1.68-.44-2.97-1.24-4.97-.9-2.26-.43-4.97 2.03-5.9.22-.09.32-.13.46-.1.13.01.23.1.43.27 1.4 1.17 2.78 2.31 5.33 5.34 2.07 2.46 3.94 5.3 6.78 5.9 2.6.54 4.08 1.24 4.86 2.33.29.4.44.61.3.88s-.44.28-1.04.29c-2.22.04-6.72.1-8.17-.13-1.67-.27-3.39-4.37-5.57-6-.4-.29-.6-.44-.87-.3-.28.14-.28.43-.28 1.02v4.48c0 .48 0 .71-.15.86-.14.14-.38.14-.85.14H4.25c-.47 0-.71 0-.86-.14-.14-.15-.14-.38-.14-.86Z'
        stroke='currentColor'
      />
    </svg>
  )
}
