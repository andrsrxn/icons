import type { Icon } from './types'

export const IconRibbon: Icon = ({
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
      data-slot='icon-ui-ribbon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M4.84 7.88 6.9 4.23l5.12 5.9-2.96 3.9z' fill='currentColor' />
      <path
        opacity='.2'
        d='m12.29 18.04 2.83-3.76 4.55 4.53-.75 3.14-3.53.32z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m7.61 5.23-.6-.64a1 1 0 0 1-.1-1.23l.7-1.08a1 1 0 0 1 .84-.46h7.15a1 1 0 0 1 .8.4l.81 1.07a1 1 0 0 1-.12 1.35l-.71.65a1 1 0 0 1-.68.26H8.34a1 1 0 0 1-.73-.32'
        fill='currentColor'
      />
      <path
        d='M18.72 6.2 17.6 4.22 5.46 18.1a3 3 0 0 0-.45.59q-.09.15-.13.32c-.04.18-.04.37-.04.74 0 .95 0 1.42.2 1.77q.2.34.54.54c.35.2.83.2 1.77.2h.33c.67 0 1 0 1.3-.13l.13-.06c.28-.16.47-.43.87-.97l8.55-11.66c.55-.76.83-1.14.86-1.58.02-.44-.2-.85-.67-1.67'
        stroke='currentColor'
      />
      <path
        d='m15.18 14.15 3.37 3.93c.25.28.37.43.45.6l.12.3c.04.18.04.37.04.75 0 .97 0 1.45-.21 1.81q-.2.3-.51.51c-.36.22-.85.22-1.82.22h-.31c-.67 0-1 0-1.3-.13l-.12-.07c-.27-.15-.47-.42-.87-.95l-1.98-2.67m-.42-8.27L6.4 4.23 5.28 6.19c-.46.82-.7 1.23-.67 1.67s.3.82.86 1.58l3.17 4.32'
        stroke='currentColor'
      />
      <path
        d='m6.04 4.86.6-1.08c.57-.99.85-1.48 1.32-1.75.46-.27 1.03-.27 2.17-.27h3.77c1.13 0 1.7 0 2.17.27s.74.76 1.3 1.75L18 4.86'
        stroke='currentColor'
      />
      <path d='M7.73 5.55h8.56' stroke='currentColor' />
    </svg>
  )
}
