import type { Icon } from './types'

export const IconDnsOff: Icon = ({
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
      data-slot='icon-ui-dns-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.4 12c0-3.14 0-4.71-.84-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79s0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M4.46 13.82v-3.68c0-.4 0-.6.16-.76.15-.14.33-.14.69-.12 1.05.04 2.73.47 2.73 2.72s-1.68 2.68-2.73 2.72c-.36.02-.54.02-.7-.12-.15-.15-.15-.36-.15-.76'
        stroke='currentColor'
      />
      <path
        d='m12.21 12.23.5 1.05c.44.95.67 1.42.9 1.37.24-.05.24-.67.24-.67'
        stroke='currentColor'
      />
      <path d='M13.85 9.24v1.58' stroke='currentColor' />
      <path d='M10.34 10.34v4.29' stroke='currentColor' />
      <path
        d='M19.77 9.97c-.33-.3-.9-.72-1.72-.72s-1.71.46-1.71 1.42c0 2.07 3.43.43 3.43 2.52 0 .99-.88 1.52-1.72 1.52'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        d='M19.1 19.36c-1.04.19-2.42.19-4.36.19H9.26c-3.33 0-5 0-6.11-.94a4 4 0 0 1-.5-.5C1.7 17 1.7 15.33 1.7 12s0-5 .93-6.11A3.4 3.4 0 0 1 4.56 4.7'
        stroke='currentColor'
      />
      <path
        d='M8.38 4.45h6.36c3.33 0 5 0 6.11.94a4 4 0 0 1 .5.5c.94 1.11.94 2.78.94 6.11v0c0 2.64 0 4.46-.6 5.62'
        stroke='currentColor'
      />
    </svg>
  )
}
